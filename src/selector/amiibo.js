import { createSelector } from 'reselect';

const selectAllAmiibos = state => state.amiibo.amiibos;

export const amiibosSelector = createSelector(selectAllAmiibos);
