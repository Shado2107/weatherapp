import reactDom from "react-dom";
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Titre from "./components/Titre";

function App() {


  
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

export default App;
