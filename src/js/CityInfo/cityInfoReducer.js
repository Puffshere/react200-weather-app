const defaultState = {
    city: '',
    weather: '',
};

export default function CityInfoReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_CITYINFO_CITY': {
            return {
                ...state,
                city: payload.city
            };
        }

        case 'UPDATE_CITYINFO_WEATHER': {
            return {
                ...state,
                weather: payload.weather
            };
        }

        case 'ADD_CITYINFO': {
            const { city, weather } = action.payload;
            return {
                city: '',
                weather: '',
            };
        }

        default: {
            return state;
        }
    }
}
