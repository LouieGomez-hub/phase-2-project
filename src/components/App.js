import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HeroShowcase from "./HeroShowcase";
import HeroStats from "./HeroStats";

function App() {
  return (
    <div>
       <NavBar />
       <Switch>
          <Route exact path="/hero-showcase">
            <HeroShowcase />
          </Route>
          <Route exact path="/hero-stats">
            <HeroStats />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
       </Switch>
    </div>
  );
}

export default App;