import React, { useState } from "react";

function HeroForm({onAddHero}) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const heroData = {
        name: name
    }
    fetch('http://localhost:3000/heroes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(heroData),
    })
    .then((res) => res.json())
    .then((newHero) => onAddHero(newHero));
  }

  return (
    <form className="NewHero" onSubmit={handleSubmit}>
      <label>
        <input
           type="text"
           name="name"
           value={name}
           placeholder="Name..."
           onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
           type="text"
           name="name"
           value={race}
           placeholder="Race..."
           onChange={(e) => setRace(e.target.value)}
        />
      </label>
      <button className="NewHeroBtn" type="submit">Add New Hero</button>
    </form>
  );
}

export default HeroForm;