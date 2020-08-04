import React, { useState } from "react"
import Property from "../../components/molecules/Property";
import Bullet, { Tooltip } from 'devextreme-react/bullet';
import { Button, MenuItem, Select, Typography, Paper } from "@material-ui/core";
import '../../styles/components/melviz.css';

const Melviz = (comparisons) => {
  const [typeState, setTypeState] = useState('performance');

  function selectType(e) {
    setTypeState(e.target.value)
  }

  // for selecting select types
  function getAllTypes() {
    const configuration = [
      {'code': 'performance', 'label': 'Performance type'},
      {'code': 'structure', 'label': 'Structure'},
      {'code': 'completeness', 'label': 'Completeness'},
      {'code': 'source', 'label': 'Source of the number'},
      {'code': 'diegetic', 'label': 'Diegetic status of the number'},
    ];

    // check if all types have data
    const configurationTypes = [];
    configuration.map(item => {
      configurationTypes.push(item['code'])
    })

    const currentTypes = [];
    comparisons.data.map(set => {
      if (set.length > 0 && typeof(set[0].categoryCode) !== 'undefined') {
        currentTypes.push(set[0].categoryCode);
      }
    })

    // only use types where we have data
    const result = [];
    configuration.map(type => {
      if (currentTypes.includes(type.code)) {
        result.push(type);
      }
    })

    return result;
  }

  function displayActions():object {
    const types = getAllTypes();

    let items = [];
    types.map((item:{code:string, label:string})=>{
      items.push(<MenuItem value={item.code}>{item.label}</MenuItem>)
    })

    return (
      <div className="type-selector-wrapper">
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
    console.log(data.attributeUuid);

    return (
      <div className="bullets">
        <Property data={{ "content": data.attributeTitle, "uuid": data.attributeUuid, "type": 'attribute', "model":"attribute",}}/>
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

  function displayMelviz() {
    // hide if there is no data
    if (dataByType.length === 0) return null;
    
    return (
      <Paper elevation={0} className="melviz">
        <Typography variant="h2">Comparison for {typeState}</Typography>
        {displayActions()}
        {dataByType.map((data, i) => {
          return (
            displayBullets(data, i)
          );
        })}
      </Paper>
    )
  }

  function getDataForType(type:string, data):any[] {
    let result = [];

    data.map(set => {
      if (set.length > 0) {
        if (set[0].categoryCode === type) {
          result = set;
        }
      }
    })

    return result;
  }

  const dataByType = getDataForType(typeState, comparisons.data);
  return displayMelviz();
}

export default Melviz;