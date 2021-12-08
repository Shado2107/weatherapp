import reactDom from "react-dom";
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Titre from "./components/Titre";

const APP_KEY = 'fd16bd4bf34d3bb88e88f88682e2bf36';

class App extends React.Component {

  state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city);

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_KEY}`);
    const data = await api_call.json();

    if (city && country && data.cod !== 404){
 
        this.setState({
          city: `${data.name}, ${data.sys.country}`,
          country: data.sys.country,
          main: data.weather[0].main,
          celsius: this.calCelsius(data.main.temp),
          temp_max: this.calCelsius(data.main.temp_max),
          temp_min: this.calCelsius(data.main.temp_min),
          description: data.weather[0].description,
          error: ''
        });

    } else {
      this.setState({
          city: undefined,
          country: undefined,
          main: undefined,
          celsius: undefined,
          temp_max: undefined,
          temp_min: undefined,
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
                              celsius={this.state.celsius}
                              main={this.main}
                              city={this.state.city}
                              country={this.state.country}
                              temp_max={this.state.temp_max}
                              temp_min={this.state.temp_min}
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
