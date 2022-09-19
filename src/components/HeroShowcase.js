import React from "react";

function HeroShowcase({ heroes }) {
  let display;
  console.log(heroes);

  display = heroes.map(hero => {
    let { id, name, image } = hero
    return (
      <div key={id} className="col-4">
        <div className="">
          <img className="" src={image} alt="" />
        </div>
      </div>
    )
  });

  return (
    <div>{display}</div>
  )
}

export default HeroShowcase;