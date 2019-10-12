import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        searchedItem: store.searchBar.searchedItem,
    };
}

export default connect(mapStoreToProps)(SearchBar);
