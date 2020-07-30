import React from "react";
import {
  Animation,
  ArgumentAxis,
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Tick,
  Title
} from "devextreme-react/chart";

// for devexpress
const dataSource = [
  {
    attribute: 'All black cast',
    start: 1714,
    category: 'Cast',
    end: 1727,
  },
  {
    attribute: 'All black cast',
    start: 1744,
    category: 'Cast',
    end: 1777,
  },
  {
    attribute: 'No data',
    start: 1794,
    category: 'Cast',
    end: 1827,
  },
  {
    attribute: 'All white cast',
    start: 1894,
    category: 'Cast',
    end: 1927,
  },
  {
    attribute: 'All black cast',
    start: 1934,
    category: 'Cast',
    end: 1967,
  },
];

const FilmTimeline = () => {
  return (
    <section className="film-timeline">
      <Chart id="chart" dataSource={dataSource} barGroupPadding={0.2} rotated={true}>
        <ArgumentAxis categories={['Cast']}>
          {/*'Structure', 'Diegetic status of the number', 'Performance type'*/}
          {/*'Source of the number' => multiple choice */}
          <Tick visible={false} />
        </ArgumentAxis>
        <Title text="Film timeline"
               subtitle="An Abbreviated Timeline"
        />
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

export default FilmTimeline;