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
          <Route exact path="/heroshowcase">
            <HeroShowcase />
          </Route>
          <Route exact path="/herostats">
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