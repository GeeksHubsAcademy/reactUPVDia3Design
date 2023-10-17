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
  
  useEffect(()=> {
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
            array={characters}
            criteria={"Character"}
            handlerFunction={selectHandler}
            name={"characterId"}
          />
          <CustomDropDown
            array={locations}
            criteria={"Locations"}
            handlerFunction={selectHandler}
            name={"locationId"}
          />         
        </>
      ) : (
        <div>No han llegado aún.</div>
      )}
    </>
  );
}

export default App;
