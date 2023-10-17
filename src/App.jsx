import { useState, useEffect } from "react";
import "./App.css";
import {
  bringCharactersForDropdown,
  bringLocationsForDropdown,
} from "./services/apiCalls";
import { CustomDropDown } from "./common/CustomDropdown/CustomDropDown";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedData, setSelectedData] = useState({
    characterId: "",
    locationId: ""
  });

  useEffect(() => {
    //En este useEffect nutre de personajes a characters
    if (characters.length === 0) {
      bringCharactersForDropdown()
        .then((results) => {
          setCharacters(results.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [characters]);

  useEffect(() => {
    //Este useEffect nutre de localizaciones a locations
    if (locations.length === 0) {
      bringLocationsForDropdown()
        .then((results) => {

          setLocations(results.data.results);
        })
        .catch((error) => console.log(error));
    } 
  }, [locations]);
  
  useEffect(()=> {
    //useEffect que nos muestra el valor del objeto con varias propiedades JS
    console.log(selectedData);
  }, [selectedData])

  const selectHandler = (e, name) => {
    //Handler dinámico para objeto de JavaScript.
    setSelectedData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }));
  }

  return (
    <>
      {(characters.length > 0 && locations.length > 0) ? (
        <>
          <CustomDropDown
            name={"characterId"}
            array={characters}
            criteria={"Character"}
            handlerFunction={selectHandler}
          />
          <CustomDropDown
            name={"locationId"}
            array={locations}
            criteria={"Locations"}
            handlerFunction={selectHandler}
          />         
        </>
      ) : (
        <div>No han llegado aún.</div>
      )}
    </>
  );
}

export default App;
