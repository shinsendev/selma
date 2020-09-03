import React, { useState } from "react";
import { Chart, Series, Tooltip, Legend } from "devextreme-react/chart";
import Property from "../molecules/Property";
import { Paper } from "@material-ui/core";
import '../../styles/components/chronology.css';

const Chronology = (data) => {

  function getTooltip(info) {
    return (
      <div>
        <Property data={{"title": "Date", "content": info.point.data.releasedYear}} />
        <Property data={{"title": "Count", "content": info.point.data.count}} />
      </div>
    )
  }

  return (
    <Paper elevation={0} className="chronology-wrapper">
      <Chart className="chronology" dataSource={data.data.countByYears}>
        <Series
          valueField="count"
          argumentField="releasedYear"
          name="Amount of production numbers by year"
          type="bar"
          color="#3c506b" />
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