import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <Router>
          <Link to="/">
            <h2>Adopt Me!</h2>
          </Link>
          <Link to="/details/1">
            <h2>Details</h2>
          </Link>
          <Switch>
            <Route exact path="/">
              <SearchParams />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
          </Switch>
        </Router>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
