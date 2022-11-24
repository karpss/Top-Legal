import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Home from "../index";

describe("Home Component", () => {
  it("should render home component", () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
