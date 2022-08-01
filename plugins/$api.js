export default function ({ $axios, i18n }, inject) {

    let time = Date.now()
    // const lang = i18n.locale === i18n.fallbackLocale ? '' : '&_locale=' + i18n.locale

    const api = {
		bible: {
			async book() {
				return await $axios.get('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books', {
					headers: {
						'api-key': 'fcc6c570ef4a4264a5431cf77cdb8f31'
					}
				})
			}
		}
    }

    inject('api', api)
}
