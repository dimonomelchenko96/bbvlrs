let noCache = '&skip_cache=true&nocache=' + Date.now();

// const apiUrl = process.env.API_URL ;
const apiUrl = 'https://artemr23.sg-host.com/wp-json/wp/v2';
// const bibleUrl = process.env.BIBLE_URL + '/' + process.env.BIBLE_ID;
const bibleUrl = 'https://api.scripture.api.bible/v1/bibles' + '/' + 'de4e12af7f28f599-01'
// const bibleApiKey = process.env.BIBLE_APIKEY;
const bibleApiKey = 'fcc6c570ef4a4264a5431cf77cdb8f31';
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

	async function getCollection(collection, count = 50, page = 1) {
		const resp = await $axios.get(`${apiUrl}/${collection}?per_page=${count}&page=${page}` + noCache);
		return {
			data: resp.data.map(item => item.acf),
			total: resp.headers['x-wp-total']
		}
	}

	async function getBible(url) {
		return await $axios.get(`${bibleUrl}${url}`, bibleHeaders)
	}

    const api = {
		page: {
			async main() {
				return await getPageWP('main')
			},
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
		collections: {
			async characters(count = 100, page = 1) {
				return await getCollection('characters', count, page)
			}
		},
		bible: {
			async books() {
				return await getBible('/books');
			},
			async booksWithChapters() {
				return await getBible('/books?include-chapters=true');
			},
			async chapters(bookId) {
				return await getBible(`/books/${bookId}/chapters`);
			},
			async chapter(chapterId) {
				return await getBible(`/chapters/${chapterId}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true`);
			},
			async search(query, offset = 0, limit = 10) {
				return await getBible(`/search?query=${query}&offset=${offset}&limit=${limit}&sort=relevance&fuzziness=0`);
			}
		}
    };

    inject('api', api);
}
