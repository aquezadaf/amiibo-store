export const actions = {
    add: 'shoppingCart.add',
    subtract: 'shoppingCart.subtract'
};

export const addProductToCart = (product) => ({
    type: actions.add,
    product
});

export const subtractProductFromCart = (product) => ({
    type: actions.subtract,
    product
});
