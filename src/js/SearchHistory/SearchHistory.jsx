import React, { Component } from 'react';


export default class SearchHistory extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { searchH } = this.props;
        return (

            <div className="card">
                <div className="card-header cat">
                    <p className='high'>Search History</p>
                </div>
                <h5 className="body">
                    <ul className='pl-0 mb-0'>
                        {
                            searchH.map((searchedItem, index) => (
                                <div key={index}>
                                    <li className='d-flex border-top pt-1'>
                                        <p className='flex-left pl-2'> {searchedItem.searchedItem} </p>
                                        <div className='flex-right ml-auto pr-2'>
                                            <p className='mb-0'> {searchedItem.date} </p>
                                            <p className='mb-1'> {searchedItem.time} </p>
                                        </div>
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                </h5>
            </div>
        );
    }
};
