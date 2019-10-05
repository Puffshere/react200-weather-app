const defaultState = {
    searchH: '',
    
};

export default function SearchHistoryReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCHHISTORY_SEARCHH': {
            return {
                ...state,
                searchH: payload.searchH
            };
        }

        case 'ADD_SEARCHHISTORY': {
            const { searchH } = action.payload;
            return {
                searchH: '',
                
            };
        }

        default: {
            return state;
        }
    }
}