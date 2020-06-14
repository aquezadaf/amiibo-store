import React from "react";
import { shallow } from "enzyme";
import Retry from "./Retry";

it("renders retry", () => {
  const wrapper = shallow(<Retry onPress={() => {}} />);
  expect(wrapper.html()).toMatchSnapshot();
});

it("calls on press when clicking the button", () => {
  const pressMock = jest.fn();
  const wrapper = shallow(<Retry onPress={pressMock} />);
  wrapper.find("button").simulate("click");
  expect(pressMock).toHaveBeenCalled();
});
