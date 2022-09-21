import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HeroShowcase from "./HeroShowcase";
import HeroStats from "./HeroStats";

function App() {
  const [heroes, setHeroes] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    .then((res) => res.json())
    .then((data) => 
      setHeroes(data)
    )
  }, [])

  return (
    <div>
       <NavBar />
       <Switch>
          <Route exact path="/hero-showcase">
            <HeroShowcase heroes={heroes} />
          </Route>
          <Route exact path="/hero-stats">
            <HeroStats heroes={heroes}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
       </Switch>
    </div>
  );
}

export default App;