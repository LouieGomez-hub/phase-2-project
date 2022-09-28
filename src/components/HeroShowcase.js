import React from "react";

function HeroShowcase({ heroes }) {
  let display;

  display = heroes.map(hero => {
    let { id, name, image, race } = hero
    
    return (
      <div key={id} className="container">
        <div className="herocards">
          <img className="img-fluid" src={image} alt="" />
          <div className="content-container">
            <div className="content-name">{name}</div>
            <div className="details">
              <div className="details1">Race:</div>
              <div className="details2">{race}</div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div>
      {display}
    </div> 
  )
}

export default HeroShowcase;