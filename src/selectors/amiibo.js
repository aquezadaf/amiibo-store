import { createSelector } from 'reselect';

const selectAllAmiibos = state => state.amiibo.amiibos;

const selectFirst20Amiibos = createSelector(
    selectAllAmiibos,
    (amiibos) => amiibos.slice(0, 19)
);

export const amiibosSelector = selectFirst20Amiibos;
export const isLoadingSelector = state => state.amiibo.isLoading;
export const errorSelector = state => state.amiibo.error;
