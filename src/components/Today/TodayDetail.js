import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import ZipContext from "../ZipContext";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(0),
    // textAlign: "center",
    marginLeft: "15px",
  },
  paper1: {
    // padding: theme.spacing(0),
    // textAlign: "center",
    marginLeft: "15px",
  },
  dd: {
    display: "flex",
    justifyContent: "space-between",
  },
  dd1: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function TodayDetail() {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [country, setcountry] = useState("US");
  const [temp, settemp] = useState("");
  const [mintemp, setmintemp] = useState("");
  const [maxtemp, setmaxtemp] = useState("");
  const [wind, setwind] = useState("");
  const [humidity, sethumidity] = useState("");
  const [pressure, setpressure] = useState("");
  const [uv, setuv] = useState("");
  const [visibility, setvisibility] = useState("");
  const [sunrise, setsunrise] = useState("");
  const [sunset, setsunset] = useState("");
  const zipcode = useContext(ZipContext);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c9d28a7e2d584ae79f7135051212605&q=60616&days=1&aqi=no&alerts=yes`
      )
      .then((res) => {
        // console.log(res.data);
        setname(res.data.location.name);
        setcountry(res.data.location.region);
        settemp(res.data.current.temp_c);
        setmintemp(res.data.forecast.forecastday[0].day.mintemp_c);
        setmaxtemp(res.data.forecast.forecastday[0].day.maxtemp_c);
        setwind(res.data.current.wind_kph);
        sethumidity(res.data.current.humidity);
        setpressure(res.data.current.pressure_mb);
        setuv(res.data.current.uv);
        setvisibility(res.data.current.vis_km);
        setsunrise(res.data.forecast.forecastday[0].astro.sunrise);
        setsunset(res.data.forecast.forecastday[0].astro.sunset);
      });
    console.log("yo");
  }, [zipcode]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.paper} style={{ fontSize: "20px" }}>
            Weather today in Chicago, IL
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "40px", marginTop: "-25px" }}
          >
            {Math.trunc(temp)} <span style={{ fontSize: "20px" }}>°C</span>
          </div>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div
            className={classes.dd1}
            style={{ fontSize: "13px", marginTop: "-25px" }}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/362/362408.png"
              width="45"
              height="45"
            />
            {sunrise}
            <img
              src="https://image.flaticon.com/icons/png/512/362/362409.png"
              width="45"
              height="45"
            />
            {sunset}
          </div>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/1843/1843505.png"
                width="25"
                height="25"
              />
              High/Low
            </div>
            <div>
              {maxtemp} / {mintemp}
            </div>
            {/* <span></span> */}
          </div>{" "}
          <Divider />
        </Grid>

        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/615/615579.png"
                width="25"
                height="25"
              />
              Wind
            </div>
            <div>
              <span>{wind} kph </span>
            </div>
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/4064/4064415.png"
                width="25"
                height="25"
              />
              Humidity
            </div>
            <div>
              <span>{humidity} %</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid>
        {/* <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/2294/2294653.png"
                width="25"
                height="25"
              />
              Dew Point
            </div>
            <div>
              <span>Dew</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid> */}
        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/4005/4005827.png"
                width="25"
                height="25"
              />
              Pressure
            </div>
            <div>
              <span>{pressure} mb</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/606/606795.png"
                width="25"
                height="25"
              />
              UV Index
            </div>
            <div>
              <span>{uv} of 10</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/2210/2210317.png"
                width="25"
                height="25"
              />
              Visibility
            </div>
            <div>
              <span>{visibility} km</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid>
        {/* <Grid item xs={6}>
          <div className={classes.dd}>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/1415/1415431.png"
                width="25"
                height="25"
              />
              Moon Phase
            </div>
            <div>
              <span>sad</span>
            </div>
          </div>{" "}
          <Divider />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default TodayDetail;
