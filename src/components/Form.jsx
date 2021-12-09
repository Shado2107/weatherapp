import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }


    handleQueryStringChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('Fetch weather data for:', this.state.query);
        this.props.searchSubmit(this.state.query);
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.query}
                    name="city"
                    id="searchBox" 
                    placeholder="enter city name" 
                    onChange={this.handleQueryStringChange}/>
                <span 
                    className="search-button fa fa-search"
                    onClick={this.handleSearch}
                >get weather</span>
            </form>
        );
    }
}

export default Form;