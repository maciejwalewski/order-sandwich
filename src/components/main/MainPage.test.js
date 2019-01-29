import React from "react";
import { shallow } from "enzyme";

import MainPage from "./MainPage";

describe("MainPage", () => {
  it("renders main tag", () => {
    const component = shallow(<MainPage />);
    expect(component).toMatchSnapshot();
  });
});
