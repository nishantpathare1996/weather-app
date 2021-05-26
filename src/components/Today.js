import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TodayDetail from "./TodayDetail";
import TodayBox from "./TodayBox";
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
        <TodayBox />
      </div>
      <div className={classes.todaybox1}>
        <TodayDetail />
      </div>
    </div>
  );
}

export default Today;
