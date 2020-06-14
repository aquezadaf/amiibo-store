import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./ProductCard";

const defaultProps = {
  id: "01",
  image: "http://...",
  name: "Name",
  type: "Type",
  price: 1000,
  onPress: () => {},
};

it("renders product card", () => {
  const wrapper = shallow(<ProductCard {...defaultProps} />);
  expect(wrapper.html()).toMatchSnapshot();
});

it("calls on press when clicking the button", () => {
  const pressMock = jest.fn();
  const wrapper = shallow(
    <ProductCard {...defaultProps} onPress={pressMock} />
  );
  wrapper.find("button").simulate("click");
  expect(pressMock).toHaveBeenCalled();
});
