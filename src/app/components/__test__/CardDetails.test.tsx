import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import CardDetails from "..";

describe("Card Details Component", () => {
  it("should render CardDetails component", () => {
    const { container } = render(
      <Provider store={store}>
        <CardDetails />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
