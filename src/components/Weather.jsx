import React from 'react';

const Weather = props => (

        <div className="weather__info">
            {
                props.city && <p className="weather__key">Location:
                    <span className="weather__value">{props.city} </span>
                </p>
            } 
            {
                props.celsius && <p className="weather__key">Celsius:
                    <span className="weather__value">{props.celsius} C</span>
                </p>
            } 
            {
                props.description && <p className="weather__key">Main:
                    <span className="weather__value"> {props.description.charAt(0).toUpperCase() +
                        props.description.slice(1)} 
                    </span>
                </p>
            }
            {
                 props.temp_min  &&  props.temp_max && <p className="weather__key">Main:
                    <span className="weather__value"> {maxminTemp(props.temp_min, props.temp_max)}
                    </span>
                </p>
            } 
            {
                props.error && <p className="weather__key"> {props.error} </p>
            }
        </div>

);
    


export default Weather;

function maxminTemp(min, max) {
    if (max && min) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
}