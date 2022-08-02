let time = Date.now();
// const lang = i18n.locale === i18n.fallbackLocale ? '' : '&_locale=' + i18n.locale;
const bibleUrl = process.env.BIBLE_URL + '/' + process.env.BIBLE_ID;
const bibleApiKey = process.env.BIBLE_APIKEY;
const bibleHeaders = {
	headers: {
		'api-key': bibleApiKey
	}
}

export default function ({ $axios, i18n }, inject) {

    const api = {
		bible: {
			async book() {
				return await $axios.get(`${bibleUrl}/books`, bibleHeaders);
			},
			async chapters() {
				return await $axios.get(`${bibleUrl}/books/GEN/chapters`, bibleHeaders);
			},
			async chapter(chapterId) {
				return await $axios.get(`${bibleUrl}/chapters/${chapterId}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true`, bibleHeaders);
			}
		}
    };

    inject('api', api);
}
