import React from "react";
import { shallow } from "enzyme";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartList from "../../containers/ShoppingCartList";

jest.mock("../../containers/ShoppingCartList", () => () => null);

it("renders shopping cart", () => {
  const wrapper = shallow(<ShoppingCart count={1} />);
  expect(wrapper.html()).toMatchSnapshot();
});

it("renders shopping cart list when pressing shopping cart", () => {
  const wrapper = shallow(<ShoppingCart count={1} />);
  wrapper.children().simulate("click");
  const cartList = wrapper.find(ShoppingCartList);
  expect(cartList).toHaveLength(1);
});

it("does not render shopping cart list when pressing shopping cart and having no products", () => {
  const wrapper = shallow(<ShoppingCart count={0} />);
  wrapper.children().simulate("click");
  const cartList = wrapper.find(ShoppingCartList);
  expect(cartList).toHaveLength(0);
});
