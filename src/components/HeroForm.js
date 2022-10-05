import React, { useState } from "react";

function HeroForm({onAddHero}) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setName("");
    setRace("");

    const heroData = {
        name: name,
        race: race
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
    <div>
      <form className="NewHero" onSubmit={handleSubmit}>
        <label className="NewHeroLabel">
          Add New Hero:
        </label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="name"
          value={race}
          placeholder="Race..."
          onChange={(e) => setRace(e.target.value)}
        />
        <input className="SubmitInput" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HeroForm;