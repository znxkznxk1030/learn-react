import React, { Suspense } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

hydrate(
  <Suspense
    fallback={
      <div>
        loading...
        <h1>loading .................. </h1>
      </div>
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
