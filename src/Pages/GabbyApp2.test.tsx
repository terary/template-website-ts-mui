import React from "react";
import renderer from "react-test-renderer";
import { GabbyApp2 } from "./GabbyApp2";
import { BrowserRouter } from "react-router-dom";
import { AppContextProviders } from "../Application/AppContextProviders";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <AppContextProviders>
        <BrowserRouter>
          <GabbyApp2 />
        </BrowserRouter>
      </AppContextProviders>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
