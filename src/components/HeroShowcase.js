import React from "react";

function HeroShowcase({ heroes }) {
  let display;
  console.log(heroes);

  display = heroes.map(hero => {
    let { id, name, image, race } = hero
    return (
      <div key={id} className="container">
        <div className="">
          <img className="img-fluid" src={image} alt="" />
          <div className="content">
            <div>{name}</div>
            <div className="">
              <div>Race:</div>
              <div>{race}</div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div>{display}</div>
  )
}

export default HeroShowcase;