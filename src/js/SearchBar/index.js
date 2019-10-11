import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        citySearch: store.searchBar.citySearch,
    };
}

export default connect(mapStoreToProps)(SearchBar);
