import actions from "../actions";

const { fetch } = actions.amiibo.actions;

const fixedPricesRanges = [19990, 29990, 39990];

const inferPriceFromName = (name) => {
  const range = Math.floor(name.length / 10);
  if (range < 3) {
    return fixedPricesRanges[range];
  }
  return fixedPricesRanges[2];
};

const addMissingInformationToAmiibos = (amiibos) => {
  return amiibos.map((amiibo) => ({
    ...amiibo,
    price: inferPriceFromName(amiibo.name),
    id: `${amiibo.head}${amiibo.tail}`,
  }));
};

const initialState = {
  amiibos: [],
  isLoading: false,
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetch.start:
      return { ...state, isLoading: true };
    case fetch.success:
      const { response } = action;
      return {
        ...state,
        amiibos: addMissingInformationToAmiibos(response),
        isLoading: false,
        error: undefined,
      };
    case fetch.failure:
      const { error } = action;
      return { ...state, isLoading: false, error };
    default:
      return state;
  }
};
