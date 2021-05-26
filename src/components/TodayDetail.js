import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
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

function TodayDetail() {
  const classes = useStyles();

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
            {Math.trunc(18.4)} <span style={{ fontSize: "20px" }}>°C</span>
          </div>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div
            className={classes.paper}
            style={{ fontSize: "13px", marginTop: "-25px" }}
          >
            Sunrise and sunset
          </div>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/1843/1843505.png"
              width="25"
              height="25"
            />
            High/Low
          </div>{" "}
          <Divider />
        </Grid>

        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/615/615579.png"
              width="25"
              height="25"
            />
            Wind
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/4064/4064415.png"
              width="25"
              height="25"
            />
            Humidity
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/2294/2294653.png"
              width="25"
              height="25"
            />
            Dew Point
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/4005/4005827.png"
              width="25"
              height="25"
            />
            Pressure
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/606/606795.png"
              width="25"
              height="25"
            />
            UV Index
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/2210/2210317.png"
              width="25"
              height="25"
            />
            Visibility
          </div>{" "}
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <img
              src="https://image.flaticon.com/icons/png/512/1415/1415431.png"
              width="25"
              height="25"
            />
            Moon Phase
          </div>{" "}
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodayDetail;
