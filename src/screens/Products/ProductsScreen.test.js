import React from "react";
import { shallow } from "enzyme";
import ProductsScreen from "./ProductsScreen";
import ProductGrid from "../../components/ProductGrid";
import Spinner from "../../components/Spinner";
import Retry from "../../components/Retry";

jest.mock("../../components/ProductGrid", () => () => null);

const defaultProps = {
  retrieveProducts: () => {},
  products: [],
  isLoading: false,
  error: undefined,
};

it("calls retrieve products on mount", () => {
  const retrieveMock = jest.fn();
  shallow(<ProductsScreen {...defaultProps} retrieveProducts={retrieveMock} />);
  expect(retrieveMock).toHaveBeenCalled();
});

it("does not call retrieve products on mount when there is at least one product", () => {
  const retrieveMock = jest.fn();
  const products = [{ id: 1 }];
  shallow(
    <ProductsScreen
      {...defaultProps}
      retrieveProducts={retrieveMock}
      products={products}
    />
  );
  expect(retrieveMock).not.toHaveBeenCalled();
});

it("renders spinner when screen is loading", () => {
  const wrapper = shallow(<ProductsScreen {...defaultProps} isLoading />);
  const spinner = wrapper.find(Spinner);
  expect(spinner).toHaveLength(1);
});

it("renders retry when screen has an error", () => {
  const wrapper = shallow(<ProductsScreen {...defaultProps} error="Error" />);
  const retry = wrapper.find(Retry);
  expect(retry).toHaveLength(1);
});

it("calls retrieve products when pressing retry", () => {
  const retrieveMock = jest.fn();
  const wrapper = shallow(
    <ProductsScreen
      {...defaultProps}
      products={[{}]}
      retrieveProducts={retrieveMock}
      error="Error"
    />
  );
  const retry = wrapper.find(Retry);
  retry.simulate("press");
  expect(retrieveMock).toHaveBeenCalled();
});

it("renders grid with products", () => {
  const expectedProducts = [{ id: 1 }, { id: 2 }];
  const wrapper = shallow(
    <ProductsScreen {...defaultProps} products={expectedProducts} />
  );
  const { products } = wrapper.find(ProductGrid).props();
  expect(products).toEqual(expectedProducts);
});
