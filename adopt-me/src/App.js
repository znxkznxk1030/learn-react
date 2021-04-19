import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
// import NavBar from "./NavBar";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <h1 id="something-important">Adopt Me!</h1>
          <Router>
            {/* <Link to="/">Adopt Me!</Link> */}
            <Switch>
              <Route exact path="/" component={SearchParams} />
              <Route path="/details/:id" component={Details} />
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
  2;
};

render(<App />, document.getElementById("root"));
