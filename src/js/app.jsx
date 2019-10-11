import React from 'react';
import CityInfo from './CityInfo';
import SearchHistory from './SearchHistory';
import SearchBar from './SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }}


  render() {

    return (
      <div>
        <div className='container'>
          <div className="card tops alert-secondary">
            <div className="sloppy shadow-lg">
              <p className='size1 '>Origin weather Application</p>
              <p className='size2'>Always know if you'll need an umbrella!</p>
            </div>
          </div>
          <br></br>
          <SearchBar />
          <br></br>
          <div className="row">
            <div className="col-lg-6 bat">
              <CityInfo />
            </div>
            <div className="col-lg-6">
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
