import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import Today from "./components/Today/Today";
import Hourly from "./components/Hourly";
import Tenday from "./components/Tenday";
import Navtabs from "./components/Navtabs";
import ZipContext from "./components/ZipContext";
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
    </div>
  );
}

export default App;
