import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CloudIcon from "@material-ui/icons/Cloud";
import axios from "axios";
import ZipContext from "./ZipContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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

export default function TodayBox1() {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [country, setcountry] = useState("US");
  const [temp, settemp] = useState("");
  const [feelslike, setfeelslike] = useState("");
  const [description, setdescription] = useState("");
  const [mintemp, setmintemp] = useState("");
  const [maxtemp, setmaxtemp] = useState("");
  const [icon, seticon] = useState("");
  const [alert, setalert] = useState("");
  const [img, setimg] = useState("");
  const zipcode = useContext(ZipContext);
  console.log(zipcode);
  const openAPIkey = process.env.REACT_APP_OPEN_WEATHER_APIKEY;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c9d28a7e2d584ae79f7135051212605&q=60616&days=1&aqi=no&alerts=yes`
      )
      .then((res) => {
        console.log(res.data);
        setname(res.data.location.name);
        setcountry(res.data.location.region);
        settemp(res.data.current.temp_c);
        setfeelslike(res.data.current.feelslike_c);
        setmintemp(res.data.forecast.forecastday[0].day.mintemp_c);
        setmaxtemp(res.data.forecast.forecastday[0].day.maxtemp_c);

        setdescription(res.data.current.condition.text);
        // seticon(res.data.weather[0].icon);
        setimg(res.data.current.condition.icon);
        // setdetail(res.data.weather[0].description);
        setalert(res.data.alerts.alert[0].event);
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
              {/* <img src={`http://openweathermap.org/img/wn/04n.png`} /> */}
              <img src={img} alt="icon" />
            </span>
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "18px", marginTop: "-20px" }}
          >
            <span style={{ fontSize: "15px" }}>Feels like</span> {feelslike}°c
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "18px", marginTop: "-25px" }}
          >
            {Math.trunc(mintemp)}°c / {Math.trunc(maxtemp)}°c
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div
            className={classes.paper}
            style={{ fontSize: "15px", marginTop: "-15px" }}
          >
            {/* {detail} */}
            <ErrorOutlineIcon />
            {alert} &gt;
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
