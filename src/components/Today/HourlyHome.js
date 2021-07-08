import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import moment from "moment";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(0),
    // textAlign: "center",
    marginLeft: "15px",
  },
}));
function HourlyHome() {
  const classes = useStyles();
  const [hourly, setHourly] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c9d28a7e2d584ae79f7135051212605&q=60616&days=1&aqi=no&alerts=yes`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.forecast.forecastday[0].hour);
        setHourly(res.data.forecast.forecastday[0].hour);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.paper} style={{ fontSize: "20px" }}>
        Hourly
      </div>
      {hourly.map((hour) => (
        <div>
          <Divider />
          <div style={{ marginTop: "4px" }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <span style={{ fontSize: "14px" }}>
                  {" "}
                  {moment.unix(`${hour.time_epoch}`).format("LT")}
                </span>{" "}
                {/* {hour.time} */}
              </Grid>
              <Grid item xs={2}>
                <b>{hour.temp_c}</b>°C
              </Grid>
              <Grid item xs={4}>
                {/* Image Cloudy{" "} */}
                <div>
                  <img
                    src={`http:${hour.condition.icon}`}
                    width="25"
                    height="25"
                  />
                  <span style={{ fontSize: "15px" }}>
                    {hour.condition.text}
                  </span>
                </div>
              </Grid>
              <Grid item xs={2}>
                <img
                  src="https://image.flaticon.com/icons/png/512/615/615579.png"
                  width="20"
                  height="20"
                />

                <span style={{ fontSize: "15px" }}>{hour.wind_kph} kph </span>
              </Grid>
              <Grid item xs={2}>
                <img
                  src="https://image.flaticon.com/icons/png/512/4064/4064415.png"
                  width="20"
                  height="20"
                />

                <span style={{ fontSize: "15px" }}>{hour.humidity} %</span>
              </Grid>
              {/* <Grid item xs={2}>
                <img
                  src="https://image.flaticon.com/icons/png/512/606/606795.png"
                  width="20"
                  height="20"
                />

                <span>{hour.uv} /10</span>
              </Grid> */}
            </Grid>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HourlyHome;
