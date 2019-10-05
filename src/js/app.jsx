import React from 'react';
import CityInfo from './CityInfo/CityInfo';
import SearchHistory from './SearchHistory/SearchHistory';


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="card tops alert-secondary">
          <div className="sloppy">
            <p className='size1'>Origin weather Application</p>
            <p className='size2'>Always know if you'll need an umbrella!</p>
          </div>
        </div>
        <br></br>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">San Diego</button>
          <button type="button" className="btn btn-primary">New York</button>
          <button type="button" className="btn btn-primary">Washington D.C.</button>
          <button type="button" className="btn btn-primary">London</button>
          <button type="button" className="btn btn-primary">Tokyo</button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"></input>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Go!</button>
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-lg-6">
            <CityInfo />
          </div>
          <div className="col-lg-6">
            <SearchHistory />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
