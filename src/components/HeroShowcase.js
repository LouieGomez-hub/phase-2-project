import React, { useState, useEffect } from "react";

function HeroShowcase() {
  const [heroes, setHeroes] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    .then((res) => res.json())
    .then((heroes) => 
      setHeroes(heroes)
    )
  }, [])

console.log(heroes)

  return (
    <h1>Showcase</h1>
  )
}

export default HeroShowcase;