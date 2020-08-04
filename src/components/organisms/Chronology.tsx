import React, { useState } from "react";
import { Chart, Series } from 'devextreme-react/chart';

const Chronology = (data) => {
  const dataSource = [{
    year: 1962,
    count: 3
  }, {
    year: 1963,
    count: 2
  }, {
    year: 1966,
    count: 3
  }, {
    year: 1968,
    count: 4
  }, {
    year: 1970,
    count: 6
  }, {
    year: 1971,
    count: 11
  }, {
    year: 1972,
    count: 4
  }];


  function getData(data):any[] {

    let computedData = [];

    data.map(element => {
      // console.log(element.years);
      //
      // computedData.push({
      //   "year": element.years[0],
      //   "count": 1,
      // })

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