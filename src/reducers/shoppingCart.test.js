import reducer from "./shoppingCart";
import actions from "../actions";

const { add, subtract } = actions.shoppingCart.actions;

it("adds one new element to cart for addition", () => {
  const expectedState = { products: { 10: { id: 10, quantity: 1 } } };
  const initialState = { products: {} };
  const newState = reducer(initialState, { type: add, product: { id: 10 } });
  expect(newState).toEqual(expectedState);
});

it("increases quantity of existing element for addition", () => {
  const expectedState = { products: { 10: { id: 10, quantity: 2 } } };
  const initialState = { products: { 10: { id: 10, quantity: 1 } } };
  const newState = reducer(initialState, { type: add, product: { id: 10 } });
  expect(newState).toEqual(expectedState);
});

it("ignores removal of products not currently in cart for addition", () => {
  const expectedState = { products: { 10: { id: 10, quantity: 1 } } };
  const initialState = { products: { 10: { id: 10, quantity: 1 } } };
  const newState = reducer(initialState, {
    type: subtract,
    product: { id: 11 },
  });
  expect(newState).toEqual(expectedState);
});

it("removes product when subtraction one with only one remaining quantity", () => {
  const expectedState = { products: {} };
  const initialState = { products: { 10: { id: 10, quantity: 1 } } };
  const newState = reducer(initialState, {
    type: subtract,
    product: { id: 10 },
  });
  expect(newState).toEqual(expectedState);
});

it("decreases product quantity by one for subtraction", () => {
  const expectedState = { products: { 10: { id: 10, quantity: 1 } } };
  const initialState = { products: { 10: { id: 10, quantity: 2 } } };
  const newState = reducer(initialState, {
    type: subtract,
    product: { id: 10 },
  });
  expect(newState).toEqual(expectedState);
});
