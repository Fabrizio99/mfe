import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
