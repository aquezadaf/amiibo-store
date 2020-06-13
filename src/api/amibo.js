import constants from './constants'

const parseResponse = response => {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject({ error: `Status for request failed request: ${response.status}` })
}

export default {
    getAmiibos: () => fetch(`${constants.amiiboAPI}amiibo/`).then(parseResponse)
}
