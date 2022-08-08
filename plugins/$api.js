let noCache = '&skip_cache=true&nocache=' + Date.now();

const apiUrl = process.env.API_URL;
console.log('---apiUrl', apiUrl)
// const lang = i18n.locale === i18n.fallbackLocale ? '' : '&_locale=' + i18n.locale;
const bibleUrl = process.env.BIBLE_URL + '/' + process.env.BIBLE_ID;
const bibleApiKey = process.env.BIBLE_APIKEY;
const bibleHeaders = {
	headers: {
		'api-key': bibleApiKey
	}
}


export default function ({ $axios }, inject) {
	async function getPageWP(slug) {
		const pages = await $axios.get(`${apiUrl}/pages?slug=${slug}` + noCache);
		return pages.data[0];
	}

    const api = {
		page: {
			async team() {
				return await getPageWP('team')
			},
			async collaboration() {
				return await getPageWP('collaboration')
			},
			async faq() {
				return await getPageWP('faq')
			},
			async roadmap() {
				return await getPageWP('roadmap')
			},
			async source() {
				return await getPageWP('source')
			},
			async showroom() {
				return await getPageWP('showroom')
			},
		},
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
			async search(query, offset = 0, limit = 10) {
				return await $axios.get(`${bibleUrl}/search?query=${query}&offset=${offset}&limit=${limit}&sort=relevance&fuzziness=AUTO`, bibleHeaders);
			}
		}
    };

    inject('api', api);
}
