import React from "react";
import { Paper, Tooltip } from "@material-ui/core"
import Property from "../molecules/Property";
import InfoIcon from '@material-ui/icons/Info';
import containerStyles from "../../styles/components/properties-list.module.css";

const PropertiesList = (props) => {
  const data = props.data;
  const title = props.title;

  const propertiesArray = [];

  function getTitleWithTooltip() {
    if (typeof(props.info) !== 'undefined') {
      return (
        <div className={containerStyles.header}>
          <h2 className='properties-title'>{title}</h2>
          <Tooltip title={props.info} aria-label={title} className={containerStyles.tooltip}>
            <InfoIcon />
          </Tooltip>
        </div>
      )
    }

    return <h2 className='properties-title'>{title}</h2>;
  }

  return (
    <Paper className='category-section' elevation={0}>
      {getTitleWithTooltip()}
        {data.forEach((property, index) => {
          propertiesArray.push(<Property key={index} data={property}/>)
        })}
      {propertiesArray}
    </Paper>
  )
}

export default PropertiesList;