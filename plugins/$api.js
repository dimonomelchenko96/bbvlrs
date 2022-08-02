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
			async books() {
				return await $axios.get(`${bibleUrl}/books`, bibleHeaders);
			},
			async booksWithChapters() {
				return await $axios.get(`${bibleUrl}/books?include-chapters=true`, bibleHeaders);
			},
			async chapters(bookId) {
				return await $axios.get(`${bibleUrl}/books/${bookId}/chapters`, bibleHeaders);
			},
			async chapter(chapterId) {
				return await $axios.get(`${bibleUrl}/chapters/${chapterId}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true`, bibleHeaders);
			},
			async search(query) {
				return await $axios.get(`${bibleUrl}/search?query=${query}&sort=relevance&fuzziness=AUTO`, bibleHeaders);
			}
		}
    };

    inject('api', api);
}
