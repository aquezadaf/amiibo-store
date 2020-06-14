import amiibo from './amibo'

beforeEach(() => {
    fetch.resetMocks()
    jest.clearAllMocks()
})

it('resolves promise when api responds with amiibos list', async () => {
    fetch.mockResponseOnce(JSON.stringify({ amiibo: [] }))
    const promise = amiibo.getAmiibos()
    await expect(promise).resolves.toEqual([])
})

it('rejects promise when api responds with status outside 200 range', async () => {
    fetch.mockResponseOnce(JSON.stringify({ amiibo: [] }), { status: 500 })
    const promise = amiibo.getAmiibos()
    await expect(promise).rejects.toEqual({ error: 'Status for request failed request: 500' })
})

it('rejects promise when api responds does not contain amiibos list', async () => {
    fetch.mockResponseOnce(JSON.stringify({}))
    const promise = amiibo.getAmiibos()
    await expect(promise).rejects.toEqual({ error: 'Response not in supported format' })
})
