import * as shoppingCart from "./shoppingCart";

it("retrieves all values in shopping cart object as array", () => {
  const expectedShoppingCart = [{ id: 1 }, { id: 2 }];
  const currentState = {
    shoppingCart: {
      products: { firstProduct: { id: 1 }, secondProduct: { id: 2 } },
    },
  };
  const selectedState = shoppingCart.productsSelector(currentState);
  expect(selectedState).toEqual(expectedShoppingCart);
});
