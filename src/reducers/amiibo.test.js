import reducer from './amiibo'
import actions from '../actions'

const { fetch } = actions.amiibo.actions

it('sets is loading to true for fetch start', () => {
    const expectedState = {  amiibos: [], isLoading: true, error: undefined }
    const initialState = {  amiibos: [], isLoading: false, error: undefined }
    const newState = reducer(initialState, { type: fetch.start })
    expect(newState).toEqual(expectedState)
})

it('sets error and is loading to false  for fetch failure', () => {
    const expectedState = {  amiibos: [], isLoading: false, error: 'Server Error' }
    const initialState = {  amiibos: [], isLoading: true, error: undefined }
    const newState = reducer(initialState, { type: fetch.failure, error: 'Server Error' })
    expect(newState).toEqual(expectedState)
})

it('sets is loading to false, amiibos and cleans errors for fetch success', () => {
    const expectedState = {  amiibos: [], isLoading: false, error: undefined }
    const initialState = {  amiibos: [], isLoading: true, error: 'Server Error' }
    const newState = reducer(initialState, { type: fetch.success, response: [] })
    expect(newState).toEqual(expectedState)
})

it('sets amiibos with price depending on the length of its name and id for fetch success', () => {
    const amiibos = [
        { head: '0', tail: '1', name: 'Lt 10' },
        { head: '0', tail: '2', name: 'Between 10 and 20' },
        { head: '0', tail: '3', name: 'Between 20 and 30 characters' },
        { head: '0', tail: '4', name: 'More than 30 character, currently there are no amiibos with names that long' },
    ]
    const expectedAmiibos = [
        { head: '0', tail: '1', id: '01', price: 19990, name: 'Lt 10' },
        { head: '0', tail: '2', id: '02', price: 29990, name: 'Between 10 and 20' },
        { head: '0', tail: '3', id: '03', price: 39990, name: 'Between 20 and 30 characters' },
        { head: '0', tail: '4', id: '04', price: 39990, name: 'More than 30 character, currently there are no amiibos with names that long' },
    ]
    const expectedState = {  amiibos: expectedAmiibos, isLoading: false, error: undefined }
    const initialState = {  amiibos: [], isLoading: false, error: undefined }
    const newState = reducer(initialState, { type: fetch.success, response: amiibos })
    expect(newState).toEqual(expectedState)
})
