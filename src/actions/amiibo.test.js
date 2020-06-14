import * as amiibo from './amiibo'
import api from "../api";

jest.mock('../api')

beforeEach(jest.clearAllMocks)

it('dispatched fetch start when calling get amiibos thunk', () => {
    api.amiibo.getAmiibos.mockResolvedValue(true)
    const expectedDispatch = { type: 'amiibo.fetch.start' }
    const dispatchMock = jest.fn()
    amiibo.getAllAmiibosThunk()(dispatchMock)
    expect(dispatchMock).toHaveBeenCalledWith(expectedDispatch)
})

it('dispatched fetch success when calling get amiibos thunk succeeds', async () => {
    api.amiibo.getAmiibos.mockResolvedValue(true)
    const expectedDispatch = { type: 'amiibo.fetch.success', response: true }
    const dispatchMock = jest.fn()
    await amiibo.getAllAmiibosThunk()(dispatchMock)
    expect(dispatchMock).toHaveBeenCalledWith(expectedDispatch)
})

it('dispatched fetch failure when calling get amiibos thunk fails', async () => {
    api.amiibo.getAmiibos.mockRejectedValue('Error')
    const expectedDispatch = { type: 'amiibo.fetch.failure', error: 'Error' }
    const dispatchMock = jest.fn()
    await amiibo.getAllAmiibosThunk()(dispatchMock)
    expect(dispatchMock).toHaveBeenCalledWith(expectedDispatch)
})
