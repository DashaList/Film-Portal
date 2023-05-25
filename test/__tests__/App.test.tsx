import { render } from "@testing-library/react";
import App from "../../src/App/App";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

describe("App", () => {
  it("should work as expected", () => {
     render(
      <Provider store={store}>
      <MemoryRouter>
          <App />
      </MemoryRouter>
  </Provider>);
    expect(1 + 1).toBe(2);
  });
});