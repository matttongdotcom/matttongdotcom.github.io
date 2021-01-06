import './App.css';
import React from 'react';
import AboutMePage from "./aboutMe/AboutMePage";


function App() {
  return (
      <div>
    <div className="App">
      <header className="App-header">
        <div>
          Hi, I'm Matthew Tong
        </div>
        <div className="Sub-Header">
          <p>
            Welcome to my interactive resume
          </p>
        </div>
      </header>
    </div>
      <AboutMePage/>
      </div>
  );
}

export default App;
