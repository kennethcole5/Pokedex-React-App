import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(baseURL) {
  return (
    <Router basename={baseURL}>
      <switch>
        <route exact path='/'></route>
      </switch>
    </Router>
  );
}

export default App;
