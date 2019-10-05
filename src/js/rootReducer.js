import { combineReducers } from 'redux';
import CityInfoReducer from './CityInfo/cityInfoReducer';
import SearchHistoryReducer from './SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
cityInfo: CityInfoReducer,
searchHistory: SearchHistoryReducer,
});

export default rootReducer;
