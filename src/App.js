import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import Today from "./components/Today/Today";
import Hourly from "./components/Hourly";
import Tenday from "./components/Tenday";
import Navtabs from "./components/Navtabs";
import ZipContext from "./components/ZipContext";
import { Particles1 } from "./components/ParticlesComp";

function App() {
  const [zip, setzip] = useState(60616);
  const [zipcode, setzipcode] = useState(60616);
  const handleZipChange = (e) => {
    setzip(e.target.value);
  };
  const handleSubmit = () => {
    setzipcode(zip);
  };
  console.log("entire zipcode is", zipcode);
  return (
    <div>
      <CssBaseline />
      <Navbar
        handleZipChange={handleZipChange}
        handleSubmit={handleSubmit}
        zip={zip}
      />
      <ZipContext.Provider value={zipcode}>
        <Navtabs />
      </ZipContext.Provider>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles1 />
      </div>
    </div>
  );
}

export default App;
