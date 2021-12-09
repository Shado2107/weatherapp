import React from 'react';

const Form = props  => (
    <form onSubmit={props.getWeather}>
        <input  type="text" name="city" placeholder="enter city name" />
        <button className="search-button fa fa-search">Get weather</button>
        {/* <span type="button" className="search-button fa fa-search"></span> */}
    </form>
);

export default Form;