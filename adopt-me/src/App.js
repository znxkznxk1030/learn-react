import React, { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
// import NavBar from "./NavBar";

const SearchParams = lazy(() => import("./SearchParams"));
const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <h1 id="something-important">Adopt Me!</h1>

          {/* <Suspense
            fallback={
              <div>
                loading...
                <h1>loading .................. </h1>
              </div>
            }
          > */}
            {/* <Router> */}
              <Switch>
                <Route exact path="/" component={SearchParams} />
                <Route path="/details/:id" component={Details} />
              </Switch>
            {/* </Router> */}
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
