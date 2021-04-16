import React from "react";
import ReactDOM from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandleComponent from "./ImperativeHandle";

import "../public/styles.css";

function App() {
  return (
    <div className="App">
      <State />
      <Effect />
      <Context />
      <Ref />
      <Reducer />
      <Memo />
      <Callback />
      <LayoutEffect />
      <ImperativeHandleComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
