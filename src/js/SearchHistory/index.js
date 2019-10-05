import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';


function mapStoreToProps(store) {
  return {
    city: store.cityInfo.city,
    weather: store.cityInfo.weather,
  };
}

export default connect(mapStoreToProps)(CityInfo);