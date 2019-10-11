import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';


function mapStoreToProps(store) {
  return {
    searchH: store.searchBar.searchH,
  };
}

export default connect(mapStoreToProps)(SearchHistory);
