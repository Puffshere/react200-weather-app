import React, { Component } from 'react';

import {
    updateSearchHistorySearchH,
    addSearchHistory
} from './searchHistoryActions';


export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchHInput = this.handleSearchHInput.bind(this);
        this.handleAddSearchHistory = this.handleAddSearchHistory.bind(this);
    }

    handleSearchHInput(event) {
        const { dispatch } = this.props;
        const { value } = this.target;
        dispatch(updateSearchHistorySearchH(value));
    }

    handleAddSearchHistory() {
        const { searchH, dispatch } = this.props;
        dispatch(addSearchHisory(searchH));
    }


    render() {
        const { searchH } = this.props;
        return (

            <div className="card">
                <div className="card-header cat alert-info">
                    <p className='high'>Search History</p>
                </div>
                <h5 className="body">San Diego
                </h5>

            </div>




        );
    }
};
