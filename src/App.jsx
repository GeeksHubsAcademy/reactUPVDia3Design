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
  const [selectedId, setSelectedId] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharactersForDropdown()
        .then((results) => {
          setCharacters(results.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [characters]);

  useEffect(() => {
    if (locations.length === 0) {
      bringLocationsForDropdown()
        .then((results) => {

          setLocations(results.data.results);
        })
        .catch((error) => console.log(error));
    } 
  }, [locations]);
  

  useEffect(() => {
    console.log("La id seleccionada es.... ", selectedId);
  }, [selectedId]);

  useEffect(() => {
    console.log("La id seleccionada de location es.... ", selectedLocation);
  }, [selectedLocation]);

  const selectCharHandler = (e) => {
    setSelectedId(e.target.value);
  };

  const selectLocaHandler = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <>
      {(characters.length > 0 && locations.length > 0) ? (
        <>
          <CustomDropDown
            array={characters}
            criteria={"Character"}
            onChange={selectCharHandler}
          />
          <CustomDropDown
            array={locations}
            criteria={"Locations"}
            onChange={selectLocaHandler}
          />
          
        </>
      ) : (
        <div>No han llegado aún.</div>
      )}
    </>
  );
}

export default App;
