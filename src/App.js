import React from "react";
import { Home } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./app.styles.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home />} />
    </Switch>
  );
}

export default App;
