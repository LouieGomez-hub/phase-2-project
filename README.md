# Superhero Database

## Project Design:
This project was created to be a database of some popular superheroes in the universes of both Marvel and DC Comics.

The purpose of this React project is to showcase the use of routes and with my love of comicbook media and superheroes, creating a database seemed like the best way to achieve that purpose. 

With a showcase page to display the different heroes and a page to display some facts about those heroes, this application will serve as a new source of information in the superhero fan landscape.

## Features:
* A navbar at the top of the app to go between each of the three routes: 
    * Home page
    * Showcase page
    * Stats page
* A display of hero cards on the Showcase page, along with a form for users to add new heroes to the display
* A table full of facts about each hero on the Stats page such as:
    * First Comic Appearance and
    * Primary Skills/Abilities
among others

## Project Function: 
This project uses State and Effect with a fetch request to get the data from the JSON server that is intended to be displayed
```JSX
function App() {
  const [heroes, setHeroes] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    .then((res) => res.json())
    .then((data) => 
      setHeroes(data)
    )
  }, [])
```

This allows for the fetched data to be passed down to the other components where it needs to be used, such as the HeroShowcase component where the data is passed down in order to be iterated through with the map method to create the hero card displays
```JSX
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
```

The map method is also used in the HeroStats component to display the data for the facts table
```JSX
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
          <td>{height}</td>
          <td>{weight}</td>
        </tr>
      )
```

State is used again in the HeroForm component along with a POST fetch request in order to give the functionality for users to add new heroes to the Showcase page
```JSX
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
```

### Languages Used:
* JSX
* CSS
* JSON