import React from "react";
import { Home, RegisterForm } from "./pages";
import Template from "./components/template";
import { Switch, Route } from "react-router-dom";
import "./app.styles.scss";

function App() {
  return (
    <Switch>
      <Template>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/register" render={(props) => <RegisterForm />} />
      </Template>
    </Switch>
  );
}

export default App;
