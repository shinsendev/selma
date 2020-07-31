import React, { useState } from "react"
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
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import '../../styles/components/film-timeline.css';
import Timecode from "../../helpers/timecode";

const FilmTimeline = ({numbers}) => {
  const [typeState, setTypeState] = useState('structure');

  // for devexpress
  function getData(numbers:any[], type:string) {

    const data = [];
    numbers.map(number => {
      let attribute = 'no data';

      if (number[type].length > 0) {
        attribute = number[type][0].title;
      }
      data.push(
        {
          attribute: attribute,
          start: number.beginTc/60,
          end: number.endTc/60,
          category: type,
        }
      )
    })
    return data;
  }


  function selectType(e) {
    setTypeState(e.target.value)
  }

  function displayTimeline(numbers:any[]):any  {
    if (numbers.length === 0) {
      return null;
    }

    // check if number has timecode to not display an empty visualisation
    let hasTc = false;
    numbers.map( number => {
      if (number.endTc > 0) {
        hasTc = true;
      }
    });

    if (!hasTc) {
      return null;
    }

    return (
      <section className="film-timeline">
        <Typography variant="h2">Timeline for {typeState}</Typography>

        <div className="timeline-type-selector-wrapper">
          <Select
            className="timeline-type-selector"
            value={typeState}
            onChange={selectType}
          >
            <MenuItem value="structure">Structure</MenuItem>
            <MenuItem value="performance">Performance type</MenuItem>
            <MenuItem value="completeness">Completeness</MenuItem>
          </Select>
        </div>

        <Chart id="chart" dataSource={getData(numbers, typeState)} barGroupPadding={0.2} rotated={true}>
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

          <SeriesTemplate nameField="attribute" />
          <Animation enabled={false} />
        </Chart>
      </section>
    )
  }

  return displayTimeline(numbers);
}

export default FilmTimeline;