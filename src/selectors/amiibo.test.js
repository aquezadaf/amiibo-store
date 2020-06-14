import * as amiibo from './amiibo'

it('retrieves all amiibos in state', () => {
    const expectedAmiibos = [{ id: 1 }, { id: 2 }]
    const currentState = { amiibo: { amiibos: [{ id: 1 }, { id: 2 } ] } }
    const selectedState = amiibo.amiibosSelector(currentState)
    expect(selectedState).toEqual(expectedAmiibos)
})

it('retrieves loading status from state', () => {
    const expectedStatus = true
    const currentState = { amiibo: { isLoading: true } }
    const selectedState = amiibo.isLoadingSelector(currentState)
    expect(selectedState).toEqual(expectedStatus)
})

it('retrieves error from state', () => {
    const expectedError = 'Server Error'
    const currentState = { amiibo: { error: 'Server Error' } }
    const selectedState = amiibo.errorSelector(currentState)
    expect(selectedState).toEqual(expectedError)
})
