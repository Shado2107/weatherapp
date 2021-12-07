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
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_KEY}&units=metric`);
    const data = await api_call.json();
  }

  render() {
    return (
      <>
         <div className="wrapper">
             <div className="main">
                 <div className="container">
                     <div className="row">
                         <div className="col-6 title-container">
                             <Titre/>
                         </div>
                         <div className="col-6 title-container">
                             <Form />
                             <Weather/>
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
