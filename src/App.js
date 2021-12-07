import reactDom from "react-dom";
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Titre from "./components/Titre";

const APP_KEY = 'fd16bd4bf34d3bb88e88f88682e2bf36';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city);

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country && data.cod !== 404){
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          humidity: data.sys.country,
          description: data.weather[0].description,
          error: ''
        });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the correct values',
      })
    }
  }

  render() {
    return (
      <>
         <div className="wrapper">
             <div className="main">
                 <div className="container">
                     <div className="row">
                         <div className="col-6 title-container">
                             <Titre />
                         </div>
                         <div className="col-6 title-container">
                             <Form getWeather={this.getWeather} />
                             <Weather
                              temperature={this.state.temperature}
                              city={this.state.city}
                              country={this.state.country}
                              humidity={this.state.humidity}
                              description={this.state.description}
                              error={this.state.error}
                             />
                         </div>
   
                     </div>
                 </div>
             </div>
         </div>
      </>
     );
  }
};

export default App;
