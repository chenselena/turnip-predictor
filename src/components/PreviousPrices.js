import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'moment';

import TomNook from "./TomNook/TomNook";

import "../css/PreviousPrices.css";

const PreviousPrices = () => {
  const [previousPrices, setPreviousPrices] = useState([]);
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let pat_desc = {
    0: "fluctuating",
    1: "large-spike",
    2: "decreasing",
    3: "small-spike",
    4: "all",
  };

  useEffect(() => {
    const getPreviousPrices = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/prices`);
        setPreviousPrices(data);
      } catch (error) {
        console.log(error.response);
      }
    };

    getPreviousPrices();
  }, []);

  return(
    <div className="previous-prices-container">
      <div className="tom-spacing">
        <TomNook/>
      </div>
        <div className="previous-prices-table">
          <table>
            <thead>
              <tr>
                <th>First Buy</th>
                <th>Previous Pattern</th>
                <th>Buy Price</th>
                {weekdays.map((day) => (
                  <th colSpan={2}>
                    <div>{day}</div>
                    <span>AM</span>
                    <span>PM</span>
                  </th>
                ))}
                <th>Submitted Date</th>
              </tr>
            </thead>
            <tbody>
            {previousPrices.map(({_id, first_buy, previous_pattern, buy_price, mon_AM, mon_PM, tues_AM, tues_PM, weds_AM, weds_PM, thurs_AM, thurs_PM, fri_AM, fri_PM, sat_AM, sat_PM, createdAt }) => (
              <tr key={_id} style={{ borderBottom: "1px solid black" }}>
                <td>{first_buy}</td>
                <td>{pat_desc[previous_pattern]}</td>
                <td>{buy_price}</td>
                <td>{mon_AM}</td>
                <td>{mon_PM}</td>
                <td>{tues_AM}</td>
                <td>{tues_PM}</td>
                <td>{weds_AM}</td>
                <td>{weds_PM}</td>
                <td>{thurs_AM}</td>
                <td>{thurs_PM}</td>
                <td>{fri_AM}</td>
                <td>{fri_PM}</td>
                <td>{sat_AM}</td>
                <td>{sat_PM}</td>
                <td>{Moment(createdAt).format('MM/DD/YYYY')}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

    </div>

  );
}
  
export default PreviousPrices;