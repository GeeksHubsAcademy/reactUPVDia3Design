
import axios from 'axios';

export const bringCharactersForDropdown = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=5`);
}

export const bringLocationsForDropdown = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/location?page=2`);
}