import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
function HourlyHome() {
  const classes = useStyles();

  return <div className={classes.root}>Hourly</div>;
}

export default HourlyHome;
