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
    <div className="Filter">
      <select name="filter">
      <option value="All">Filter by category</option>
      <option value="Marvel">Marvel</option>
      <option value="DC">DC</option>
      </select>
      <div>
        {display}
      </div>  
    </div>
  )
}

export default HeroShowcase;