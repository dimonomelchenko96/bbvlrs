<template lang="pug">
  .mainContainer
    #renderCanvas.mainContainer(:class="{'visible': SceneLoaded,'unvisible': !SceneLoaded}",ref="renderContainer")
  
</template>

<script>
import { InitThree, InitScene, frameRednererStart, SetScroll, SetMousePos, CheckResizingWindow, LoadCallBack} from '~/plugins/renderComingSoon.js';

function HandleScroll(){
  SetScroll(window.scrollY/(window.innerHeight*2));
}

function HandleMouseMove(event){
  let x = (event.clientX / window.innerWidth - 0.5 )*2;
  let y = (event.clientY / window.innerHeight - 0.5 )*2; 

  SetMousePos(x,y);
}

export default {
  name: "render",
  data(){
    return {
        SceneLoaded:false,
      }
    },
  mounted() {
    this.$nextTick(() => {
      InitThree(this.$refs.renderContainer, true);

      InitScene();

      window.addEventListener('mousemove', e => HandleMouseMove(e));
      window.addEventListener('scroll', e => HandleScroll(e));

      LoadCallBack(this.SetSceneLoaded);
    });
  },
  methods:{
    SetSceneLoaded(){
        console.log('SetSceneLoaded');
        this.SceneLoaded = true;
        frameRednererStart();
    }
  }
}
</script>

<style>
.unvisible{
  opacity: 0;
  transition: 1s;
}
.visible{
  opacity: 1;
  transition-delay: 1s;
  transition: 2s;
}

.mainContainer{
  width: 100%;
  height: 100%;
  
  position: absolute;
  top: 0px;
  left: 0px;
}

.renderer-view{
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw !important;
  height: 100vh !important;
}

#app {
  margin: 0 0;
  padding: 0;
}

</style>