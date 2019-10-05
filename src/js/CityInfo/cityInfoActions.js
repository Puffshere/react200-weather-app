export function updateCityInfo(city) {
    return {
      type: 'UPDATE_CITYINFO_CITY',
      payload: { city }
    };
  }
  
  export function updateExpenseAmount(weather) {
    return {
      type: 'UPDATE_CITY_WEATHER',
      payload: { weather }
    };
  }
  
  export function addCityInfo(city, weather) {
    return {
      type: 'ADD_CITYINFO',
      payload: {
        city,
        weather: parseFloat(weather)
      }
    };
  }