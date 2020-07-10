import React, {useState, useEffect} from 'react';
import './App.css';
import CharactersGrid from './components/characters/CharactersGrid.js';
import SearchBar from './components/ui/SearchBar.js'

function App() {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [query, setQuery] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const apichars = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((data) => data.results);
      setChars(apichars);
      setIsLoading(false);
    }
    getData()    
    //send 'isLoading, query'  as dependencies
  },[isLoading, query]);
  let showMatches;
  return (
    <div className="container border my-5 bg-gray-100">

    <h1 className="text-center my-4">Rick and Morty Wiki</h1>
        {/*with the 'query' prop we send the input value that shoud have, and updated the state by 'set'
        The 'setQuery' state expect the 'query' value and it takes the prop as the 'query'.
        our SearchBar component works with the OnChange event, and this App component recibes this event
        The paramether here is 'eventValue' btw :P*/}
        <SearchBar query={query} setQuery={(eventValue) => setQuery(eventValue)}></SearchBar>

        <CharactersGrid chars={chars} isLoading={isLoading} ></CharactersGrid>

    </div>
  )
}

export default App;
