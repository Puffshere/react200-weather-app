const axios = require('axios');


export function getWeather(citySearch) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/SearchBar/${citySearch}`),
    }
}
export function City(citySearch) {
    return {
        type: 'CITY',
        payload: { citySearch },
    }
}
