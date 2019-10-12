const axios = require('axios');


export function getWeather(searchedItem) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/SearchBar/${searchedItem}`),
    }
}
export function City(searchedItem) {
    return {
        type: 'CITY',
        payload: { searchedItem },
    }
}
