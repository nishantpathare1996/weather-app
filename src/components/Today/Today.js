import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TodayDetail from "./TodayDetail";
import TodayBox from "./TodayBox";
import TodayBox1 from "./TodayBox1";
import HourlyHome from "./HourlyHome";
import LineChart from "./LineChart";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  todaybox: {
    maxWidth: "45%",
    marginTop: "50px",
    // border: "3px solid red",
    margin: "auto",
    color: "white",
    backgroundImage: "linear-gradient(#1a357c,#5a3e8c)",
    borderRadius: "15px",
  },
  todaybox1: {
    maxWidth: "45%",
    marginTop: "50px",
    border: "3px solid #1a357c",
    margin: "auto",
    padding: "5px",
    color: "black",
    backgroundColor: "#dedede",
    borderRadius: "15px",
  },
}));
function Today() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.todaybox}>
        <TodayBox1 />
      </div>
      <div className={classes.todaybox1}>
        <TodayDetail />
      </div>
      <div className={classes.todaybox1}>
        <HourlyHome />
      </div>
      <div className={classes.todaybox1}>
        <LineChart />
      </div>
    </div>
  );
}

export default Today;
