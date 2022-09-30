import './App.css';
import React from 'react';
// import GetData from './components/GetData/GetData';

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
  console.log(people);
  return (
    <div>
    </div>
  );
}

export default App;
