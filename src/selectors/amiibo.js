import { createSelector } from 'reselect';

const fixedPricesRanges = [19990, 29990, 39990]

const inferPriceFromName = (name) => {
    const range = Math.floor(name.length / 10)
    if (range < 3) {
        return fixedPricesRanges[range]
    }
    return fixedPricesRanges[2]
}

const selectSubSetOfAmiibos = (state) => state.amiibo.amiibos.slice(0, 20)

const addMissingInformationToAmiibos = (amiibos) => {
    return amiibos.map(amiibo => ({ 
        ...amiibo, 
        price: inferPriceFromName(amiibo.name), 
        id: `${amiibo.head}${amiibo.tail}` 
    }))
};

const selectAmiibos = createSelector(
    selectSubSetOfAmiibos,
    addMissingInformationToAmiibos
);

export const amiibosSelector = selectAmiibos;
export const isLoadingSelector = state => state.amiibo.isLoading;
export const errorSelector = state => state.amiibo.error;
