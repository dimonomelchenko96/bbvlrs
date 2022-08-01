import * as THREE from "three";
import { AmbientLight, DirectionalLight } from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import PerlinT from "~/assets/textures/perlin.jpg";

var scene,
	camera,
	target,
	renderer,
	handModel,
	textModel,
	directionalLights,
	dlTargets,
	smokePlane,
	canRenderer = false

var SceneLoadedModelCount = 0;
var SceneLoadedDelegate;
let depthTextureGetted = 0;

let resolution = 2;//Resolution of render
let cameraFOV = 35; //FOV of camera (zoom)
let cameraDistance = 120; //Distance to model
let autoResize = true;

let smooth_mouseXYS = new THREE.Vector3(3,3,15);//smooth for input. Large > fast smooth, less > low smooth

let input_mouseXYS = new THREE.Vector3(0,0,0);//saved raw inputs (target fo smooth input)
let cur_mouseXYS = new THREE.Vector3(0,0,0);//factical input for animation system
let delta_mouseXYS = new THREE.Vector2(0,0);
let timeAddFactor = -100;
let savedRenderSize = new THREE.Vector2(0,0);
let renderObjectId;

let sceneLightFactor = new THREE.Vector2(0,0); //x = cur, y = target
let textLightFactor = new THREE.Vector2(0,0);

function createMaterial() {      
	const smokeShader = new THREE.ShaderMaterial({
		uniforms: {
			mousePos: {type: 'vec2', value: new THREE.Vector2(0.,0.)},
			timeSpeedUp: {type: 'float', value: 0.0},
			time: {type: 'float', value: 1.0},
			smokeLight: {type: 'vec3', value: new THREE.Vector3(0.471372549,0.5258823529,0.5394117647)},
			windowAspect: {type: 'float', value: 1.0},
			perlinNoise: {type: 'sampler2D', value: new THREE.TextureLoader().load(PerlinT,function ( texture ) {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				texture.anisotropy =  renderer.capabilities.getMaxAnisotropy();
			})},
			depthTexture: {type: 'sampler2D', value: null},
		},
		vertexShader: vertexShaderSmoke(),
		fragmentShader: fragmentShaderSmoke(),
		blending: THREE.AddOperation,
		depthWrite: false,
		depthTest: false,
		transparent: true
	});

	const textShader = new THREE.ShaderMaterial({
		uniforms: {
			mousePos: {type: 'vec2', value: new THREE.Vector2(0.,0.)},
			textLight: {type: 'float', value: -.01},
		},
		vertexShader: vertexShaderText(),
		fragmentShader: fragmentShaderText(),
		depthWrite: true,
		depthTest: true,
	});
	return {
		smokeShader,
		textShader,
	}
}

function vertexShaderSmoke() {
return `
  out vec2 texCoordOut;
  varying vec4 vPos;

  void main() {
	vPos = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	texCoordOut = uv;

	gl_Position = vPos;
  }
`
}

function fragmentShaderSmoke() {
return `
	uniform sampler2D perlinNoise;
	uniform sampler2D depthTexture;
	uniform float time;
	uniform float timeSpeedUp;
	uniform vec2 mousePos;
	uniform float windowAspect;
	uniform vec3 smokeLight;

	varying vec4 vPos;

	in vec2 texCoordOut;

	vec2 timeMainWrap = vec2(0.031,0.152);
	vec2 timeWrap = vec2(-0.031,-0.022);
	vec2 timeWrapForOffset = vec2(0.051,-0.032);

	float scalePerlin = 2.0;
	float scalePerlinSec = 4.; 
	float scaleOfOssetCord = 2.75; 
	float offset = 0.15;

	float rand(vec2 co){
		return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
	}

	
	float GetSmoke(sampler2D perlinNoiseT, vec2 texCoordOutUV, float timeSpeedUpF, float timeF, float downRadianFactorF)
	{
		float secPerlineNoise = 1.7*texture(perlinNoiseT, texCoordOutUV*scalePerlinSec+vec2(-timeWrap.x*(1.0-0.00016*(-1.+2.*downRadianFactorF)),timeWrap.y*0.5*(1.0+0.00013*downRadianFactorF)-0.0001*timeSpeedUpF*downRadianFactorF)*timeF).x*texture(perlinNoise, texCoordOutUV*scalePerlinSec+timeWrap*timeF+vec2(timeWrap.x*timeSpeedUpF,timeWrap.y*timeSpeedUpF)+vec2(27.*timeSpeedUpF*downRadianFactorF,0.1*downRadianFactorF)).x;
		secPerlineNoise=clamp(secPerlineNoise,.0,1.);

		float mainPerlineNoise = texture(perlinNoiseT, texCoordOutUV*scalePerlin*0.8+timeWrapForOffset*timeF+vec2(2.*timeSpeedUpF*downRadianFactorF*(0.5-1.5*secPerlineNoise),timeWrapForOffset.y*100.0*timeSpeedUpF*downRadianFactorF)).x;
		mainPerlineNoise = 2.*mainPerlineNoise*texture(perlinNoiseT, vec2(0.,texCoordOutUV.y*-downRadianFactorF*(0.2+0.8*mainPerlineNoise))+texCoordOutUV*scalePerlin+timeWrapForOffset*timeF+texCoordOutUV*0.05*(mainPerlineNoise-0.5)).x;

		vec2 offsetedCord = vec2(texCoordOutUV.x,texCoordOutUV.y);
		offsetedCord.x = offsetedCord.x + mainPerlineNoise*offset*(1.+timeSpeedUpF*1.05)*(0.5+0.5*downRadianFactorF);
		offsetedCord.y = offsetedCord.y - mainPerlineNoise*offset*(1.+timeSpeedUpF*-0.5);
		

		float resultSmoke = texture(perlinNoiseT, offsetedCord*scaleOfOssetCord+timeMainWrap*timeF+vec2(0.,timeMainWrap.y*-timeSpeedUpF)).x;

		resultSmoke = resultSmoke*mainPerlineNoise*secPerlineNoise;

		return resultSmoke;
	}

	float GetDirRay(sampler2D DepthTexture,vec2 origPos, vec2 direction, float dist, int iteration){
		direction = normalize(direction);
		float result = 0.;
		float orig = texture(DepthTexture,origPos).x;
		result = orig;

		for(int i = 1; i < iteration; i++){
			float factor = float(i)/float(iteration-1);
			float point = texture(DepthTexture,origPos+direction*dist*factor).x;
			
			if(point<orig){
				result = result+point*(1.0-0.9*factor)+orig*(factor*0.9)*(0.5+0.5*point);
			}else{
				result = result+orig;
			}

			
		}

		return result/float(iteration);
	}

	void main() {
		vec2 vCoords = vPos.xy;
		vCoords /= vPos.w;
		vCoords = vCoords * 0.5 + 0.5;

		float depthF = texture(depthTexture,vCoords).x;
		
		float downRadianFactor = pow(vCoords.x*2.-1.,2.)+pow(vCoords.y,2.);
		downRadianFactor = clamp(1.-pow(downRadianFactor,0.5)*0.6,0.,1.);

		float noise = rand(vec2(vCoords.x*windowAspect,vCoords.y)*rand(vec2(vCoords.x*windowAspect,vCoords.y)*time));

		float verticalFade = clamp(vCoords.y*4.,0.,1.)*clamp(1.0-vCoords.y*1.2,0.,1.);
		verticalFade = clamp(verticalFade,0.,1.);

		float mainSmokeFactor = GetSmoke(perlinNoise,texCoordOut*1.15+0.01*timeSpeedUp,timeSpeedUp,time,downRadianFactor);
		mainSmokeFactor = pow(mainSmokeFactor,(1.3))*(1.3);
		mainSmokeFactor = clamp(mainSmokeFactor,0.,1.);

		float backgroundSmoke = GetSmoke(perlinNoise,texCoordOut*0.75+vec2(0.34,0.11),timeSpeedUp*0.2,time*0.4,downRadianFactor);

		float mainSmokeColor = pow(mainSmokeFactor,2.-verticalFade)*0.3+0.7*(mainSmokeFactor*1.2)*verticalFade;

		vec2 shinePos = vec2(-mousePos.x,mousePos.y);
		shinePos = shinePos * 0.5 + 0.5;
		float shineFactor = clamp(1.-pow(pow((vCoords.x-shinePos.x)*windowAspect,2.)+pow(vCoords.y-shinePos.y,2.),0.5)/1.2,0.,1.); //1.2 - shine radius
		shineFactor = shineFactor*shineFactor*0.5;
		mainSmokeColor = mainSmokeColor*(1. + 0.05*shineFactor)+clamp(pow(mainSmokeColor,5.)*200.,0.,3.)*shineFactor;

		float depthAlphaBackground = (clamp(depthF,0.9,1.0)-0.9)*10.;

		float dirRay = GetDirRay(depthTexture,vCoords,vec2(mousePos.x,1.+mousePos.x*mousePos.x),0.1,15);
		dirRay = depthF*pow((1.-abs(depthF-dirRay)),3.);
		dirRay = dirRay*dirRay*1.25;
		dirRay = clamp(dirRay,0.,1.);

		mainSmokeColor = (clamp(mainSmokeColor*1.2*clamp((dirRay+0.1*shineFactor),0.0,1.0),0.0,1.0)+(0.6)*depthAlphaBackground*backgroundSmoke*clamp(1.0-vCoords.y*vCoords.y*2.,0.0,1.0))*(0.85+0.15*noise);
		mainSmokeColor = clamp(mainSmokeColor,0.,1.);

		mainSmokeColor += (0.3*downRadianFactor+0.7*dirRay)*(1.-vCoords.y)*0.03+(1.-vCoords.y*vCoords.y)*0.005;

		vec4 color = vec4(smokeLight.x,smokeLight.y,smokeLight.z,mainSmokeColor*2.);//vec4(depthF,depthF,depthF,1.0);//
		color = clamp(color,0.,1.);//vec4((vCoords.x-0.75)*4.,0.,0.,1.);//clamp(color,0.,1.);
		gl_FragColor = color;
	}
`
}

function vertexShaderText() {
	return `
	  varying vec4 vPos;
	  out vec3 vNormal;

	  void main() {
		vPos = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		vNormal = normal;
		gl_Position = vPos;
	  }
	`
}
	
function fragmentShaderText() {
return `
	uniform vec2 mousePos;
	uniform float textLight;
	varying vec4 vPos;
	in vec3 vNormal;



	void main() {
		vec2 vCoords = vPos.xy;
		vCoords /= vPos.w;
		vCoords = vCoords * 0.5 + 0.5;

		float shaded = dot(vNormal,normalize(vec3(mousePos.x*2.,1.7+mousePos.y,-1.)));
		
		shaded = pow(clamp(shaded*1.25,0.,1.),2.);
		shaded = (clamp(shaded,0.2,1.0)-0.2)/0.8;
		shaded = clamp(shaded*0.7+0.02+textLight,0.,1.);
		
		vec4 color = vec4(0.93,0.96,1,1.)*shaded*1.2;
		
		color = clamp(color,0.,1.);
		gl_FragColor = color;
	}
`
}

//Timing block
var sceneTiming = {
	//Date.now()
	deltaTime: 0.001,
	oldTick: Date.now(),
};

function InitThree(renderView, autoResizing) {
	autoResize = autoResizing;
	renderObjectId = renderView.getAttribute("id");
	//savedRenderSize.x = document.getElementById(renderObjectId).clientWidth;
	//savedRenderSize.y = document.getElementById(renderObjectId).clientHeight;

	console.log("savedRenderSize",savedRenderSize);

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(savedRenderSize.x*resolution, savedRenderSize.y*resolution);
	renderer.setClearColor(0x000000, 1);

	setupRenderTarget();

	renderer.domElement.setAttribute("class", "renderer-view");
	renderView.appendChild(renderer.domElement);
}

function InitScene() {

	let renderObject = document.getElementById(renderObjectId);
	camera = new THREE.PerspectiveCamera(cameraFOV, renderObject.clientWidth/renderObject.clientHeight, 0, 1000);
	CheckResizingWindow(true);

	const fbxLoader = new FBXLoader();

	fbxLoader.load(
		'models/hand.fbx',
		(handObject) => {

			let material = new THREE.MeshPhysicalMaterial({
				color: 0x505050,
				roughness:0.635,
				metalness:1,
			});

			handObject.traverse(function (child) {
				child.material = material;
			})

			handModel = handObject;
			handModel.rotateY(Math.PI*1.5);
			handModel.translateY(-60);
			handModel.translateZ(3);

			scene.add(handModel);
			
			console.log('handObject loaded');

			SceneLoadedModelCount += 1;

			if(SceneLoadedModelCount >= 2){
				if(SceneLoadedDelegate){
					SceneLoadedDelegate();
				}
			}
		},
		(xhr) => {
		},
		(error) => {
			console.log(error)
		}
	);

	fbxLoader.load(
		'models/text.fbx',
		(textObject) => {
			
			let material = createMaterial().textShader;

			// let material = new THREE.MeshStandardMaterial({
			// 	color: 0x252525,
			// 	roughness:0.22,
			// 	metalness:1,
			// });

			textObject.traverse(function (child) {
				child.material = material;
			})

			textModel = textObject;
			textModel.rotateY(Math.PI*1.5);
			textModel.translateY(-8);
			textModel.translateX(-25.5);
			textModel.translateZ(20);

			scene.add(textModel);

			console.log('textObject loaded');
			
			SceneLoadedModelCount += 1;

			if(SceneLoadedModelCount >= 2){
				if(SceneLoadedDelegate){
					SceneLoadedDelegate();
				}
			}
		},
		(xhr) => {
		},
		(error) => {
			console.log(error)
		}
	);
	
	smokePlane = new THREE.Mesh(new THREE.PlaneGeometry(200,200,2,2), createMaterial().smokeShader);

	smokePlane.material.uniforms.windowAspect.value = camera.aspect;//1
	smokePlane.material.uniforms.time.value = Math.random()*100000;
	smokePlane.position.set(0,0,20);
	scene.add(smokePlane);

	directionalLights = [];
	dlTargets = [];
	let countOfLight = 4;
	for(var i = 0; i < countOfLight; i+=1){
		directionalLights[i] = new DirectionalLight();
		directionalLights[i].color = new THREE.Color(0.93,0.96,1);
		directionalLights[i].intensity = 0.5;
		dlTargets[i] = new THREE.Object3D();
		scene.add(dlTargets[i]);
		scene.add(directionalLights[i]);
		directionalLights[i].target = dlTargets[i];
	}

	directionalLights[1].intensity = 0.1;
	directionalLights[2].intensity = 0.2;
	directionalLights[3].intensity = 0.075;
	dlTargets[3].position.set(2,-0.5,-0.5);
	dlTargets[2].position.set(-1.2,-0.5,1);
}

function frameRednererStart() {
	canRenderer = true;
	frameUpdate();
}

function frameRednererStop() {
	canRenderer = false;
}

function SmoothAnim(cur, target, percentage, deltaTime, tolerance, deltaTimeLagIgnore){
	if(deltaTime < 0.5){
		let result = cur + (target-cur)*percentage*deltaTime;
		if(Math.abs(result - target) <= tolerance){
			result = target;
		}
		return result;
	}else{//if FPS less 2 and if page switched or paused
		if(deltaTimeLagIgnore){
			let result = cur + (target-cur)*percentage*0.5;
			if(Math.abs(result - target) <= tolerance){
				result = target;
			}
			return result;
		}else{
			return target;
		}
	}
}

function InputToCur(){
	//SMOOTHING INPUTS
	let oldMousePos = new THREE.Vector2(cur_mouseXYS.x,cur_mouseXYS.y);
	cur_mouseXYS.set(
		SmoothAnim(cur_mouseXYS.x,input_mouseXYS.x, smooth_mouseXYS.x, sceneTiming.deltaTime,0.005),
		SmoothAnim(cur_mouseXYS.y,input_mouseXYS.y, smooth_mouseXYS.y, sceneTiming.deltaTime,0.005),
		SmoothAnim(cur_mouseXYS.z,input_mouseXYS.z, smooth_mouseXYS.z, sceneTiming.deltaTime,0.0001)
	);
	delta_mouseXYS = new THREE.Vector2(cur_mouseXYS.x-oldMousePos.x,cur_mouseXYS.y-oldMousePos.y);
}

function HandLightRotationAnim(){
	//GET RADIANS ROTATION

	if(dlTargets.length >= 2){
		dlTargets[0].position.set(-cur_mouseXYS.x*2+0.3,cur_mouseXYS.y*1-0.5,2);
		directionalLights[0].intensity = 0.7+0.3*cur_mouseXYS.x;
		dlTargets[1].position.set(-cur_mouseXYS.x*4+0.3,cur_mouseXYS.y*1-0.5-Math.abs(cur_mouseXYS.x),5-3*Math.abs(cur_mouseXYS.x));
		dlTargets[2].position.set(-1+1.2*cur_mouseXYS.x,-0.5,1);
	}

	
}

function FaceScrollAnim(){
}

function setupRenderTarget() {

	if ( target ) target.dispose();

	target = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight);
	target.texture.minFilter = THREE.NearestFilter;
	target.texture.magFilter = THREE.NearestFilter;
	target.stencilBuffer = false;
	target.depthTexture = new THREE.DepthTexture();
	target.depthTexture.format = THREE.DepthFormat;
	target.depthTexture.type = THREE.UnsignedShortType;

}

function updateSceneLighting(){
	if(sceneLightFactor.x != sceneLightFactor.y){
		sceneLightFactor.x = SmoothAnim(sceneLightFactor.x ,sceneLightFactor.y, 1.2, sceneTiming.deltaTime, 0.005,true);
	}
	if(textLightFactor.x != textLightFactor.y){
		textLightFactor.x = SmoothAnim(textLightFactor.x ,textLightFactor.y, 0.35, sceneTiming.deltaTime, 0.005,true);
	}

	//apply

	textModel.material.uniforms.textLight.value = -0.01+textLightFactor.x;
	directionalLights[0].intensity = 0.55*sceneLightFactor.x;
	let smokeLightFactor = 0.4+0.6*sceneLightFactor.x;
	smokePlane.material.uniforms.smokeLight.value = new THREE.Vector3(0.4714*smokeLightFactor,0.5259*smokeLightFactor,0.5394*smokeLightFactor);

}

//UPDATE RENDER

//let debugTimer = 0;

function frameUpdate() {
	//debugTimer = debugTimer + 1;
	//PAGE RESIZE
	if(autoResize){
		CheckResizingWindow();
	}
	//GetZBuffer
	if(depthTextureGetted>2){
		smokePlane.material.uniforms.depthTexture.value = target.depthTexture;
		depthTextureGetted = -1;
	}else if(depthTextureGetted != -1){
		depthTextureGetted += 1;
		renderer.setRenderTarget( target );
		renderer.render( scene, camera );
		renderer.setRenderTarget( null);
	}

	if (canRenderer) {
		requestAnimationFrame(frameUpdate);
	}

	//DELTA TIME
	sceneTiming.deltaTime = (Date.now() - sceneTiming.oldTick) / 1000;
	if(sceneTiming.deltaTime < 0.001){
		sceneTiming.deltaTime = 0.001;
	}
	sceneTiming.oldTick = Date.now();

	//INPUT SMOOTH
	InputToCur();

	//LIGHT ANIMS
	HandLightRotationAnim();

	//SMOKE ANIM
	let timeAddFactorNew = Math.abs(delta_mouseXYS.x) / sceneTiming.deltaTime + 0.5 * delta_mouseXYS.y / sceneTiming.deltaTime;
	timeAddFactorNew = timeAddFactorNew*timeAddFactorNew*0.135;
	
	if(timeAddFactor < -99){
		timeAddFactorNew = 1;
	}

	if(timeAddFactorNew > timeAddFactor){
		timeAddFactor = SmoothAnim(timeAddFactor ,timeAddFactorNew, 0.75, sceneTiming.deltaTime,0.005);
	}else{
		timeAddFactor = SmoothAnim(timeAddFactor ,timeAddFactorNew, 0.25, sceneTiming.deltaTime,0.005);
	}

	smokePlane.material.uniforms.time.value += sceneTiming.deltaTime*(0.4+timeAddFactor);
	smokePlane.material.uniforms.mousePos.value.set(cur_mouseXYS.x,cur_mouseXYS.y);
	textModel.material.uniforms.mousePos.value.set(cur_mouseXYS.x,cur_mouseXYS.y);
	smokePlane.material.uniforms.timeSpeedUp.value = timeAddFactor*0.002;

	//Light Update

	updateSceneLighting();

	//RENDER
	
	renderer.render(scene, camera);
}

//INPUTS

function SetScroll(scroll){
	let input_scroll = Math.min(Math.max(scroll, 0), 1);
	
	input_mouseXYS.set(input_mouseXYS.x,input_mouseXYS.y,input_scroll);
}

function SetMousePos(x,y){
	
	let input_mouseX = Math.min(Math.max(x, -1), 1);
	let input_mouseY = Math.min(Math.max(y, -1), 1);

	input_mouseXYS.set(input_mouseX,input_mouseY,input_mouseXYS.z);
}

function CheckResizingWindow(cameraSetup){
	let nowW = document.getElementById(renderObjectId).clientWidth;
	let nowH = document.getElementById(renderObjectId).clientHeight;
	
	if(savedRenderSize.x != nowW || savedRenderSize.y != nowH || cameraSetup){

		var newAspect = (nowW/nowH);

		camera.aspect = newAspect;
		camera.near = 60*(2/newAspect);
		camera.far = 160*(2/newAspect);

		camera.position.set(
			0,
			0,
			cameraDistance*(2/newAspect)
		);
		camera.updateProjectionMatrix();

		renderer.setSize(nowW*resolution,nowH*resolution);

		savedRenderSize.x = nowW;
		savedRenderSize.y = nowH;

		depthTextureGetted = 0;

		if(!cameraSetup){
			smokePlane.material.uniforms.windowAspect.value = camera.aspect;
		}
	}
}

function LoadCallBack(method){
	console.log('LoadCallBack',method);
	SceneLoadedDelegate = method;
}

function SendComand(commandId, data){
	switch(commandId){
		case 'setSceneLight': sceneLightFactor.y = data; break;
		case 'setTextLight': textLightFactor.y = data; break;
	}
}

export { InitThree, InitScene, frameRednererStart, SetScroll, SetMousePos, CheckResizingWindow, LoadCallBack, SendComand};