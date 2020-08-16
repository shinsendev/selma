import React, { useState } from "react";
import { Chart, Series, Tooltip, Legend } from "devextreme-react/chart";
import Property from "../molecules/Property";
import { Paper } from "@material-ui/core";
import '../../styles/components/chronology.css';

const Chronology = (data) => {

  function getTooltip(info) {
    return (
      <div>
        <Property data={{"title": "Date", "content": info.point.data.year}} />
        <Property data={{"title": "Count", "content": info.point.data.count}} />
      </div>
    )
  }


  function getData(data):any[] {

    let computedData = [];

    data.map(element => {
      // if there are more than on year
      if (element.years.length > 1) {
        element.years.map(year => {
          // if the data already exists for the year, we increment to 1
          if (typeof(computedData[year]) !== 'undefined') {
            computedData[year].value = computedData[year].value + 1;
          }
          else { // we set the value to 1
            computedData[year] = {
              "year": year,
              "value": 1,
            };
          }
        });
      }
      // there is only one year
      else {
        let year = element.years[0];
        if (typeof(computedData[year]) !== 'undefined') {
          computedData[year].value = computedData[year].value + 1;
        } else { // we set the value to 1
          computedData[year] = {
            "year": year,
            "value": 1,
          }
        }
      }
    });

    let finalData = [];
    // remove 0 date
    computedData.map((element, index) => {
      if (element.year > 0) {
        finalData.push({
          "year": element.year,
          "count": element.value,
        })
      }
    })

    return finalData;
  }

  return (
    <Paper elevation={0} className="chronology-wrapper">
      <Chart className="chronology" dataSource={getData(data.data)}>
        <Series
          valueField="count"
          argumentField="year"
          name="Attributes by year"
          type="bar"
          color="#ffaa66" />
        <Legend
          position="outside"
          horizontalAlignment="center"
          verticalAlignment="bottom"
        />
        <Tooltip
          enabled={true}
          contentRender={getTooltip}
        />
      </Chart>
    </Paper>
  );
}

export default Chronology;