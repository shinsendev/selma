import React from "react";
import {
  Animation,
  ArgumentAxis,
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Tick,
  Title,
} from "devextreme-react/chart";
import {
  Typography
} from "@material-ui/core";
import Timecode from "../../helpers/timecode";

// for devexpress
function getData(numbers:any[], type:string) {
  const data = [];
  numbers.map(number => {
    data.push(
      {
        attribute: 'No data',
        start: number.beginTc/60,
        end: number.endTc/60,
        category: type,
      }
    )
  })
  return data;
}

function displayTimeline(numbers:any[]): null|object  {
  if (numbers.length === 0) {
    return null;
  }

  let hasTc = false;
  numbers.map( number => {
    if (number.endTc > 0) {
      hasTc = true;
    }
  });

  if (!hasTc) {
    return null;
  }

  const type = 'structure';

  return (
    <section className="film-timeline">
      <Typography variant="h2">Timeline for {type}</Typography>
      <Chart id="chart" dataSource={getData(numbers, type)} barGroupPadding={0.2} rotated={true}>
        <ArgumentAxis>
          {/*'Structure', 'Diegetic status of the number', 'Performance type'*/}
          {/*'Source of the number' => multiple choice */}
          <Tick visible={false} />
        </ArgumentAxis>
        <CommonSeriesSettings
          type="rangeBar"
          argumentField="category"
          rangeValue1Field="start"
          rangeValue2Field="end"
          barOverlapGroup="category"
        >
        </CommonSeriesSettings>
        {/*<Legend verticalAlignment="bottom" horizontalAlignment="center">*/}
        {/*  <Title text="house" />*/}
        {/*</Legend>*/}
        <SeriesTemplate nameField="attribute" />
        <Animation enabled={false} />
      </Chart>
    </section>
  )
}

const FilmTimeline = ({numbers}) => {
  return displayTimeline(numbers);
}

export default FilmTimeline;