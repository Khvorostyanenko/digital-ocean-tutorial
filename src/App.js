import React from "react";
import "./index.css";
import DivTogglerReact from "./DivTogglerReact.js";
import DivTogglerRedux from "./DivTogglerRedux.js";

const App = () => (
  <div>
    <DivTogglerRedux />
    <DivTogglerReact />
  </div>
);

export default App;
