import api from '../api'

export const actions = {
    fetch: {
        start: 'amiibo.fetch.start',
        success: 'amiibo.fetch.success',
        failure: 'amiibo.fetch.failure'
    }
}

const startAmiibosRequest = () => ({ type: actions.fetch.start })

const handleAmiibosSuccessRequest = (amiibos) => ({
    type: actions.fetch.success,
    response: amiibos
})

const handleAmiibosFailureRequest = (error) => ({
    type: actions.fetch.failure,
    error
})

export const getAllAmiibosThunk = () => (dispatch) => {
    dispatch(startAmiibosRequest())
    return api.amiibo.getAmiibos()
        .then(amiibos => dispatch(handleAmiibosSuccessRequest(amiibos)))
        .catch(error => dispatch(handleAmiibosFailureRequest(error)))
}
