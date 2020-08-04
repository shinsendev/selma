import React, { useState } from "react";
import { Chart, Series } from 'devextreme-react/chart';

const Chronology = (data) => {

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
    <div>
      <Chart className="chronology" dataSource={getData(data.data)}>
        <Series
          valueField="count"
          argumentField="year"
          name="Attributes by year"
          type="bar"
          color="#ffaa66" />
      </Chart>
    </div>
  );
}

export default Chronology;