import React, { Component } from 'react';

import {
    getWeather,
    City
} from './searchBarActions';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedItem: ''
        }

        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(City(value));
    }

    handleSearch(e) {
        e.preventDefault()
        const { dispatch } = this.props;
        const { searchedItem } = this.props;
        dispatch(getWeather(searchedItem));
    }



    render() {
        const { searchedItem } = this.props;


        return (
            < div id='shane'>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button id='san-diego' onClick={this.handleCityInput} value='San Diego' type='radio' name='cities' className='btn btn-primary'>San Diego</button>
                    <button id='new-york' onClick={this.handleCityInput} value='New York' type='radio' name='cities' className='btn btn-primary'>New York</button>
                    <button id='washington-dc' onClick={this.handleCityInput} value='Washington DC.' type='radio' name='cities' className='btn btn-primary'>Washington D.C.</button>
                    <button id='london' onClick={this.handleCityInput} value='London' type='radio' name='cities' className='btn btn-primary'>London</button>
                    <button id='tokyo' onClick={this.handleCityInput} value='Tokyo' type='radio' name='cities' className='btn btn-primary'>Tokyo</button>
                </div>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='' value={searchedItem} onChange={this.handleCityInput}></input>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary text-white' type='button' value={this.state.searchedItem} onClick={this.handleSearch}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchBar;
