import React, { useState } from "react";
import { Chart, Series, Tooltip } from "devextreme-react/chart";
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
      if (computedData[element.years[0]] > 0) {
        computedData[element.years[0]] = computedData[element.years[0]] + 1;

        computedData.push({
          "year": element.years[0],
          "value": computedData[element.years[0]],
        })
      }
      else {
        computedData[element.years[0]] = 1;
        computedData.push({
          "year": element.years[0],
          "value": computedData[element.years[0]],
        })
      }
    })

    let finalData = [];
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
        <Tooltip
          enabled={true}
          contentRender={getTooltip}
        />
      </Chart>
    </Paper>
  );
}

export default Chronology;