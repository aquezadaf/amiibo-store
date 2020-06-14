import actions from '../actions'

const { fetch } = actions.amiibo.actions;

const initialState = {
    amiibos: [],
    isLoading: false,
    error: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case fetch.start:
            return { ...state, isLoading: true };
        case fetch.success:
            const { response } = action;
            return { ...state, amiibos: response, isLoading: false, error: undefined };
        case fetch.failure:
            const { error } = action;
            return { ...state, isLoading: false, error };
        default:
            return state;
    }
};
