import React from 'react';
import Giphy from "./components/Giphy";
import "./App.css";

const App = () => {
  return (
      <div className="app">
    {/* <div className="left-scene">
      <div className="selected-gif">
        THE SELECTED GIF HERE
      </div>
    </div> */}

    <div className="">
      {/* THE SIDEBAR GIF LIST HERE */}
      <Giphy />
    </div>
  </div>
  );
};

export default App;
