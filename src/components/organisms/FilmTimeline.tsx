import React, { useState } from "react"
import {
  Animation,
  ArgumentAxis,
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Tick,
  Title,
  Tooltip
} from "devextreme-react/chart";
import {
  Typography,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import '../../styles/components/film-timeline.css';
import Property from "../molecules/Property"

const FilmTimeline = ({numbers}) => {
  const [typeState, setTypeState] = useState('structure');
  const [isRotatedState, setRotated] = useState(true);

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
          title: number.title
        }
      )
    })
    return data;
  }

  // for selecting select types
  function getAllTypes() {
    return [
      {'code': 'structure', 'label': 'Structure'},
      {'code': 'performance', 'label': 'Performance type'},
      {'code': 'completeness', 'label': 'Completeness'},
      {'code': 'diegetic', 'label': 'Diegetic status of the number'},
      {'code': 'source', 'label': 'Source of the number'},
      {'code': 'cast', 'label': 'Cast'},
    ]
  }

  function displayActions():object {
    const types = getAllTypes();

    let items = [];
    types.map((item:{code:string, label:string})=>{
      items.push(<MenuItem value={item.code}>{item.label}</MenuItem>)
    })

    return (
      <div className="timeline-type-selector-wrapper">
        <Select
          className="timeline-type-selector"
          value={typeState}
          onChange={selectType}
        >
          {items}
        </Select>

        <Button onClick={rotate} variant="outlined" className="rotate-button">Rotate</Button>
      </div>
    )
  }

  function rotate() {
    if (isRotatedState === true) {
      setRotated(false);
    }
    else {
      setRotated(true);
    }
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

    function getTooltip(info) {
      return (
        <div>
          <Property data={{"title": "number title", "content": info.point.data.title}} />
          <Property data={{"title": "category", "content": info.point.data.category}} />
          <Property data={{"title": "attribute", "content": info.point.data.attribute}} />
          <Property data={{"title": "begin", "content": (info.point.data.start)*60, "type": "timecode"}} />
          <Property data={{"title": "end", "content": (info.point.data.end)*60, "type": "timecode"}} />
        </div>
      )
    }

    return (
      <section className="film-timeline">
        <Typography variant="h2">Timeline for {typeState}</Typography>

        {displayActions()}

        <Chart id="chart" dataSource={getData(numbers, typeState)} barGroupPadding={0.4} rotated={isRotatedState}>
          <ArgumentAxis>
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
          <Tooltip
            enabled={true}
            contentRender={getTooltip}
          />
        </Chart>
      </section>
    )
  }

  return displayTimeline(numbers);
}

export default FilmTimeline;