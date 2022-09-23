import React from "react";

function HeroStats({ heroes }) {
  return (
    <div className="stats-table">
     <table className="table">
       <tr className="table-header">
         <th>Name</th>
         <th>Gender</th>
         <th>Primary Skill</th>
         <th>First Appearance</th>
         <th>Height/Weight</th>
       </tr>
        {heroes.map(hero => {
        let { name, 
              primarySkill, 
              gender, 
              firstAppearance, 
              height, 
              weight } = hero

      return (
        <tr className="table-content">
          <td>{name}</td>
          <td>{gender}</td>
          <td>{primarySkill}</td>
          <td>{firstAppearance}</td>
          <td>{height} <hr></hr> {weight}</td>
        </tr>
      )
    })}
      </table>
    </div>
  )
}

export default HeroStats;