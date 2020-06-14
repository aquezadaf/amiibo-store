import * as shoppingCart from "./shoppingCart";

it("dispatches add product event with product", () => {
  const expectedDispatch = {
    type: "shoppingCart.add",
    product: { id: 1, name: "Name" },
  };
  const dispatchedEvent = shoppingCart.addProductToCart({
    id: 1,
    name: "Name",
  });
  expect(dispatchedEvent).toEqual(expectedDispatch);
});

it("dispatches subtract product event with product", () => {
  const expectedDispatch = {
    type: "shoppingCart.subtract",
    product: { id: 1, name: "Name" },
  };
  const dispatchedEvent = shoppingCart.subtractProductFromCart({
    id: 1,
    name: "Name",
  });
  expect(dispatchedEvent).toEqual(expectedDispatch);
});
