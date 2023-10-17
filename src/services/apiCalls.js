
import axios from 'axios';

export const bringCharactersForDropdown = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=5`);
}