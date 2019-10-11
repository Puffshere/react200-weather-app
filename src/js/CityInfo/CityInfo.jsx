import React, { Component } from 'react';


class CityInfo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { citySearch, lat, lon, temp, pressure, humidity, temp_min, temp_max, wind } = this.props;
        return (
            <div className="card">
                <div className="card-header cat">
                    <p className='high'>City Information</p>
                </div>
                <h5 className="body">
                    <div className='row'>
                        <h3 className='col-12'>{citySearch}</h3>
                        <p className='col-12 snake'> Lat/Long: {lat}, {lon} </p>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div className='row'>
                        <h6 className='col-4'> Temperature (F) </h6>
                        <h6 className='col-4'> Pressure </h6>
                        <h6 className='col-4'> Humidity </h6>
                    </div>
                    <div className='row text-success'>
                        <h6 className='col-4'>{temp}</h6>
                        <h6 className='col-4'>{pressure}</h6>
                        <h6 className='col-4'>{humidity}</h6>
                    </div>
                    <div className='row'>
                        <h6 className='col-4'> Lowest Temp (F) </h6>
                        <h6 className='col-4'> Highest Temp (F) </h6>
                        <h6 className='col-4'> Wind Speed </h6>
                    </div>
                    <div className='row'>
                        <h6 className='col-4'>{temp_min}</h6>
                        <h6 className='col-4'>{temp_max}</h6>
                        <h6 className='col-4'>{wind}</h6>
                    </div>

                </h5>
            </div>
        );
    }
}

export default CityInfo;
