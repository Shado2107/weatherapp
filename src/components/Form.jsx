import React from 'react';

const Form = props  => {
    return (
        <form>
            <input className="city" type="text" name="city" placeholder="enter city name" />
            <input className="country" type="text" name="country" placeholder="enter country name" />
            <button>Get weather</button>
        </form>
    );
};

export default Form;