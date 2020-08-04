import React, { useState } from "react"
import Property from "../../components/molecules/Property";
import Bullet, { Tooltip } from 'devextreme-react/bullet';
import color_box from "devextreme/ui/color_box";
import { Button, MenuItem, Select, Typography } from "@material-ui/core"

const Melviz = (comparisons) => {
  const [typeState, setTypeState] = useState('performance');

  function selectType(e) {
    setTypeState(e.target.value)
  }

  // for selecting select types
  function getAllTypes() {
    return [
      {'code': 'performance', 'label': 'Performance type'},
      {'code': 'structure', 'label': 'Structure'},
      {'code': 'completeness', 'label': 'Completeness'},
      {'code': 'source', 'label': 'Source of the number'},
      {'code': 'diegetic', 'label': 'Diegetic status of the number'},
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
      </div>
    )
  }

  function getCustomizeTooltip(data) {
    return {
      text: `Attribute: <strong>${data.attributeTitle}</strong>
        <br>Current: <strong>${data.current/100}%</strong>
        <br>Average: <strong>${data.average/100}%</strong>`
    };
  }

  function getTargetColor(value, target) {
    let color;
    (value > target) ? color = '#ff5959' : color = '#0df40d';
    return color;
  }

  function displayBullets(data, i:number) {
    return (
      <div>
        <Property data={{ title: data.attributeTitle}}/>
        <Bullet
          className="bullet"
          startScaleValue={0}
          endScaleValue={100}
          value={data.average/100}
          target={data.current/100}
          targetColor={getTargetColor(data.average, data.current)}
          color='#1db2f5'
          title={data.attributeTitle}
          key={i}
        >
          <Tooltip customizeTooltip={()=>getCustomizeTooltip(data)} />
        </Bullet>
      </div>
    )
  }

  function getDataForType(type:string, data):any[]
  {
    let result = [];

    data.map(set => {
      if (typeof(set[0]) != 'undefined') {
        if (set[0].categoryCode === type) {
          result = set;
        }
      }
    })

    return result;
  }

  // const dataMelviz = [{
  //     title: 'instrumental',
  //     value: 10.3,
  //     target: 1.9,
  //     targetColor: getTargetColor(10.3, 1.9),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'instrumental+dance',
  //     value: 11,
  //     target: 22,
  //     targetColor: getTargetColor(11, 22),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'song',
  //     value: 3.2,
  //     target: 24,
  //     targetColor: getTargetColor(3.2, 24),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'other',
  //     value: 45.4,
  //     target: 25,
  //     targetColor: getTargetColor(45.4, 25),
  //     color: '#1db2f5'
  //   }];

  const dataByType = getDataForType(typeState, comparisons.data);

  return (
    <div id="melviz">
      {displayActions()}

      <Typography variant="h2">Comparison for {typeState}</Typography>
        {dataByType.map((data, i) => {
          return (
            displayBullets(data, i)
          );
        })}
    </div>
  )
}

export default Melviz;