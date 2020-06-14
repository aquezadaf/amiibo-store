import React from "react";
import { shallow } from "enzyme";
import NavigationBar from "./NavigationBar";

jest.mock("react-router-dom");
jest.mock("../../containers/ShoppingCart", () => () => null);

it("renders navigation bar", () => {
  const wrapper = shallow(<NavigationBar />);
  expect(wrapper.html()).toMatchSnapshot();
});
