import React from 'react';

const Today = props => {


    return (
        <div className="today-component-container">
        <div className="date-container">
            <div>{props.day}</div>
            <div>{props.date}</div>
        </div>

        <div className="icon-desc-container">
            <div className="icon-conatainer">
                <i className={`wi wi-owm-${props.weatherId} weather-icon ${props.iconClass}`} ></i>
            </div>
            <div className="weather-desc">{props.description}</div>
        </div>

        <div className="temp-container">
            <div className="temp-text">
                <span>{props.mainTemperature}</span>
                <i className="wi wi-degrees"></i>
            </div>
            <div className="high-low-container">
                <div className="high-low-item">
                    <span>
                        <i className="wi wi-direction-up" ></i>
                    </span>
                    <span>Max</span>
                    <span>
                        <span>{props.maxTemperature}&#x00B0;</span>
                    </span>
                </div>
                <div className="high-low-item">
                    <span>
                        <i className="wi wi-direction-down" ></i>
                    </span>
                    <span>Min</span>
                    <span>
                        <span>{props.minTemperature}&#x00B0;</span>
                    </span>
                </div>
            </div>
        </div>

        <div className="extra-info-container">
            <div className="extra-info-item">
                <span><i className="wi wi-humidity"></i></span>
                <span>Humidity</span>
                <span>{props.humidity}%</span>
            </div>
            <div className="extra-info-item">
                <span><i className="wi wi-barometer"></i></span>
                <span>Pressure</span>
                <span>{props.pressure} hPa</span>
            </div>
            <div className="extra-info-item">
                <span><i className="wi wi-strong-wind"></i></span>
                <span>Wind Speed</span>
                <span>{props.windSpeed} {props.windSpeedUnit}</span>
            </div>
        </div>
    </div >
    );
};

export default Today;