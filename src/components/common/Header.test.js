import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

it("contains 2 NavLinks", () => {
  const numLinks = shallow(<Header />).find(".nav-link").length;
  expect(numLinks).toEqual(2);
});
