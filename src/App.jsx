import React from "react";
import "./App.css";
import PhoneNumber from "./component/autcomplete";

function App() {
  return (
    <div className="App">
      <p className="textabove">Enter Your phone Number For Verification</p>
      <br></br>
      <PhoneNumber />
    </div>
  );
}

export default App;
