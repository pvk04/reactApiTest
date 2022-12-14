import './App.css';
import React from 'react';
import Person from './components/Person/Person';

function App() {
   const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    async function fetchPeople(){
      fetch("https://swapi.dev/api/people/")
      .then((res) => res.json()) 
      .then((json) => setPeople(json.results));
    }

    fetchPeople();
  }, []);

  return (
    <div>
      {people.map(({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url}) => {
        return(
          <li key={url}>
            <Person name={name} height={height} mass={mass} hair_color={hair_color} skin_color={skin_color} eye_color={eye_color} birth_year={birth_year} gender={gender} />
          </li>
        );
      })}
    </div>
  );
}

export default App;
