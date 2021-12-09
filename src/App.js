import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

const APP_KEY = 'fd16bd4bf34d3bb88e88f88682e2bf36';
const geolocation = navigator.geolocation;

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
      latLng: [],
      error: false
  }

  location(){
    if(geolocation){
      geolocation.getCurrentPosition((position) => {
          this.setState({
            latLng: [position.coords.latitude, position.coords.longitude]
          })
      })
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forcast/daily/weather?q=${city}&cnt=7&appid=${APP_KEY}`);
    const data = await api_call.json();
    if (city && data.cod !== 404){
 
        this.setState({
          city: `${data.name}, ${data.sys.country}`,
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
         <div className="app_container">
             <div className="app-nav">
                 {/* <div className="container"> */}
                   <Navbar/>
                     {/* <div className="row">
                         <div className="col-6 title-container">
                             <Titre />
                         </div>
                         <div className="col-6 form-container">
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
                     </div> */}
                 {/* </div> */}
             </div>
         </div>
      </>
     );
  }
};

export default App;
