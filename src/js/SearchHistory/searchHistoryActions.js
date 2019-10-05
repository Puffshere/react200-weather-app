export function updateSearchHistory(searchH) {
    return {
      type: 'UPDATE_SEARCHHISTORY_CITY',
      payload: { searchH }
    };
  }
  
  export function addSearchHistory(searchH) {
    return {
      type: 'ADD_SEARCHHISTORY',
      payload: {
        searchH: parseFloat(searchH)
      }
    };
  }