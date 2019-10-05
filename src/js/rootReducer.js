import { combineReducers } from 'redux';
import CityInfoReducer from './cityInfoReducer';
import SearchHistoryReducer from './searchHistoryReducer';

const rootReducer = combineReducers({
// add reducers
cityInfo: CityInfoReducer,
searchHistory: SearchHistoryReducer,
});

export default rootReducer;
