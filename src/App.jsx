import { useState, useEffect } from "react";
import "./App.css";
import { bringCharactersForDropdown } from "./services/apiCalls";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharactersForDropdown()
        .then((results) => {
          setCharacters(results.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [characters]);

  useEffect(()=>{

    console.log("La id seleccionada es.... ", selectedId);

  }, [selectedId]);

  const selectCharHandler = (e) => {
    setSelectedId(e.target.value);
  };

  return (
    <>
      {characters.length > 0 ? (
        <div>
          <select onChange={selectCharHandler}>
            <option value="Select a Character">
              -- Select a Character --
            </option>
            {characters.map((character) => (
              <option key={character.id} value={character.id}>{character.name}</option>
            ))}
          </select>
        </div>
      ) : (
        <div>No han llegado aún.</div>
      )}
    </>
  );
}

export default App;
