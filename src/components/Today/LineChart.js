// import React from "react";

// function LineChart() {
//   return (
//     <div>
//       <h2>Line CHart</h2>
//     </div>
//   );
// }

// export default LineChart;
import moment from "moment";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  const [hourly, setHourly] = useState([]);
  const [hours, setHours] = useState([]);
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c9d28a7e2d584ae79f7135051212605&q=60616&days=1&aqi=no&alerts=yes`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.forecast.forecastday[0].hour);
        let hours = [];
        let degrees = [];
        for (let i = 0; i < res.data.forecast.forecastday[0].hour.length; i++) {
          hours.push(
            moment
              .unix(`${res.data.forecast.forecastday[0].hour[i].time_epoch}`)
              .format("LT")
          );
          degrees.push(res.data.forecast.forecastday[0].hour[i].temp_c);
        }
        // console.log(hours);
        // console.log(degrees);
        setHours(hours);
        setDegrees(degrees);
        setHourly(res.data.forecast.forecastday[0].hour);
      })
      .catch((err) => console.log(err));
  }, []);
  const state = {
    // labels: ["January", "February", "March", "April", "May"],
    labels: hours,

    datasets: [
      {
        label: "Degree Celsius",

        fill: false,

        lineTension: 0.5,

        backgroundColor: "rgba(75,192,192,1)",

        borderColor: "rgba(0,0,0,1)",

        borderWidth: 2,
        data: degrees,
        // data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,

            text: "Average Rainfall per month",

            fontSize: 20,
          },

          legend: {
            display: true,

            position: "right",
          },
        }}
      />
    </div>
  );
}
