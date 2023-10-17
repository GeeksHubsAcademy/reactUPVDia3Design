import { useState, useEffect } from "react";
import "./App.css";
import { bringCharactersForDropdown } from "./services/apiCalls";
import { CustomDropDown } from "./common/CustomDropdown/CustomDropDown";

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
        <CustomDropDown 
            array={characters}
            criteria={"Character"}
            functionHandler={selectCharHandler}      
          />       
      ) : (
        <div>No han llegado aún.</div>
      )}
    </>
  );
}

export default App;
