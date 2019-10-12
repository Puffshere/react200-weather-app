import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
        town: store.searchBar.town,
        lat: store.searchBar.lat,
        lon: store.searchBar.lon,
        temp: store.searchBar.temp,
        pressure: store.searchBar.pressure,
        humidity: store.searchBar.humidity,
        temp_min: store.searchBar.temp_min,
        temp_max: store.searchBar.temp_max,
        wind: store.searchBar.wind
    };
}
export default connect(mapStoreToProps)(CityInfo);
