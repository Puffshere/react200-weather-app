import React, { Component } from 'react';

import {
    updateCityInfoCity,
    updateCityInfoWeather,
    addCityInfo
} from './cityInfoActions';


export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleWeatherInput = this.handleWeatherInput.bind(this);
        this.handleAddCityInfo = this.handleAddCityInfo.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = this.target;
        dispatch(updateCityInfoCity(value));
    }

    handleWeatherInput(event) {
        const { dispatch } = this.props;
        const { value } = this.target;
        dispatch(updateCityInfoWeather(value));
    }

    handleAddCityInfo() {
        const { city, weather, dispatch } = this.props;
        dispatch(addCityInfo(city, weather));
    }


    render() {
        const { city, weather } = this.props;
        return (

            <div className="card">
                <div className="card-header alert-info">
                    <p>City Information</p>
                </div>
                <h5 className="body">


                </h5>

            </div>


        );

    }
};
