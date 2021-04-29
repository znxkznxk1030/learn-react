import React, { StrictMode, useState, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import ThemeContext from "./ThemeContext.tsx";

const SearchParams = lazy(() => import("./SearchParams"));
const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <h1 id="something-important">Adopt Me!</h1>
          <Switch>
            <Route exact path="/" component={SearchParams} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
