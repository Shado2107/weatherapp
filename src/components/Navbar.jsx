import React, { Component } from 'react';
import Form from './Form';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendNewUnitToParent = (newUnit) => {
        this.props.changeUnit(newUnit);
    }

    sendQueryStringToParent = (query) => {
        this.props.searchSubmit(query);
    }

    render() {
        return (
            <nav>
                        <ul className="navbar-container">
                            <li className="navbar-list-item">
                                <Form searchSubmit={this.sendQueryStringToParent} />
                            </li>
                            <li className="navbar-list-item city-name">
                                <span>{this.props.data.city}</span>
                            </li>
                            <li className="navbar-list-item">
                                
                            </li>
                        </ul>
            </nav>
        );
    }
   
};

export default Navbar;