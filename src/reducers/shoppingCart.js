import actions from '../actions'

const { add, subtract } = actions.shoppingCart.actions;

const addProduct = (products, addedProduct) => {
    const { id } = addedProduct
    const product = products[id]
    if (!product) {
        return { ...products, [id]: { ...addedProduct, quantity: 1 } }
    }
    return { ...products, [id]: { ...product, quantity: product.quantity + 1 } }
}

const subtractProduct = (products, subtractedProduct) => {
    const { id } = subtractedProduct
    const product = products[id]
    if (!product) {
        return products
    }
    const  { [id]: selectedProduct, ...productsWithoutSubtracted } = products
    if (selectedProduct.quantity <= 1) {
        return productsWithoutSubtracted
    }
    return { ...products, [id]: { ...product, quantity: product.quantity - 1 } }
}

const initialState = {
    products: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case add:
            return { ...state, products: addProduct(state.products, action.product) };
        case subtract:
            return { ...state, products: subtractProduct(state.products, action.product) };
        default:
            return state;
    }
};
