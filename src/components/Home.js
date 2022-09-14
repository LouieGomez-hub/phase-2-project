import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <p>Read up on some facts about some of the most popular heroes in two universes:</p>
      <button>
        <img className="marvelpng" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png?20161025051221" alt="Marvel"/>
      </button>
      <button>
        <img className="dcpng" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png" alt="DC"/>
      </button>
    </div>
  );
}

export default Home;