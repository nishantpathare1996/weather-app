import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CloudIcon from "@material-ui/icons/Cloud";
import axios from "axios";
import ZipContext from "./ZipContext";

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
}));

export default function TodayBox() {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [country, setcountry] = useState("US");
  const [temp, settemp] = useState("");
  const [feelslike, setfeelslike] = useState("");
  const [description, setdescription] = useState("");
  const [mintemp, setmintemp] = useState("");
  const [maxtemp, setmaxtemp] = useState("");
  const [icon, seticon] = useState("");
  const [detail, setdetail] = useState("");
  const zipcode = useContext(ZipContext);
  console.log(zipcode);
  const openAPIkey = process.env.REACT_APP_OPEN_WEATHER_APIKEY;
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=metric&appid=${openAPIkey}`
      )
      .then((res) => {
        console.log(res.data);
        setname(res.data.name);
        setcountry(res.data.sys.country);
        settemp(res.data.main.temp);
        setfeelslike(res.data.main.feels_like);
        setmintemp(res.data.main.temp_min);
        setmaxtemp(res.data.main.temp_max);
        setdescription(res.data.weather[0].main);
        seticon(res.data.weather[0].icon);
        setdetail(res.data.weather[0].description);
      });
    console.log("yo");
  }, [zipcode]);
  console.log(icon);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.paper} style={{ fontSize: "23px" }}>
            {name}, {country} Weather
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            className={classes.paper}
            style={{ fontSize: "13px", marginTop: "-25px" }}
          >
            As of 11:28 pm CDT
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "45px", marginTop: "-25px" }}
          >
            {Math.trunc(temp)} <span style={{ fontSize: "20px" }}>°C</span>
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper1}
            style={{ fontSize: "25px", marginTop: "-25px" }}
          >
            <span style={{ marginTop: "-40px" }}>{description} </span>
            <span className={classes.weathericon}>
              <img src={`http://openweathermap.org/img/wn/04n.png`} />
            </span>
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "18px", marginTop: "-20px" }}
          >
            <span style={{ fontSize: "15px" }}>Feels like</span> {feelslike}
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "18px", marginTop: "-25px" }}
          >
            {Math.trunc(mintemp)}°/{Math.trunc(maxtemp)}°
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div
            className={classes.paper}
            style={{ fontSize: "15px", marginTop: "-15px" }}
          >
            {detail}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
