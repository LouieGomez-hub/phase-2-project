import React from "react";

function HeroStats({ heroes }) {
  return (
    <div className="stats-table">
     <table>
       <tr className="table-header">
         <th>Name</th>
         <th>Primary Skill</th>
         <th>Gender</th>
       </tr>
        {heroes.map(hero => {
        let { name, primarySkill, gender } = hero
      return (
        <tr className="table-content">
          <td>{name}</td>
          <td>{primarySkill}</td>
          <td>{gender}</td>
        </tr>
      )
    })};
      </table>
    </div>
  )
}

export default HeroStats;