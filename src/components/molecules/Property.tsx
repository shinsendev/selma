import React from "react";
import Timecode from "../../helpers/timecode";
import PropertyWithTitleContent from "../atoms/PropertyWithTitleContent";
import SimplePropertyContent from "../atoms/SimplePropertyContent";
import { Link } from "gatsby";
import { PropertyData } from "../../interfaces/PropertyData"

const Property = ({data}) => {

  const blank:string = 'blank';

  /**
   *
   * @param data
   */
  function  getType(data:PropertyData):string {
    let type:string = 'default';

    if (typeof data.type !== 'undefined') {
      type = data.type;
    }
    return type;
  }

  function displayAttribute(data:PropertyData) {
    return <Link to={data.model+'/'+data.uuid}>{data.content}</Link>
  }

  function displayTimeCode(timecode:number):string {
    return Timecode.convert(timecode);
  }

  // Called by displayList, we select the content to display : list, timecode, attribute
  function displayContent(data:PropertyData):any {
    // get type
    const type = getType(data);
    const content = data.content;

    switch(type) {
      case 'list':
        if ('options' in data && 'listPropertyTitle' in data.options) {
          return displayList(data);
        }
        return displayList(data);

      case 'timecode':
        return displayTimeCode(content);

      case 'attribute':
        return displayAttribute(data);

      default:
        return content;
    }
  }

  function displayList(data:PropertyData) {
    let response = blank;
    let list = data.content;
    let property = data.property;

    if(list.length > 0) {
      response = '';
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // if there is no property, we don't need to use it (example: for person, we need to get person.fullname but for censorship we directly use the value of the censorship)
          (property)? response = response+item[property] :response = response+item;
        }
        else {
          (property)? response = response+item[property]+', ' :response = response+item+', ';
        }
      });
    }
    return response;
  }

  // first function to display a Property and select if we display or not the title
  function displayProperty(data:PropertyData) {

    if (typeof data.title !== 'undefined') {
      return <PropertyWithTitleContent title={data.title} content={displayContent(data)} />
    }
    return <SimplePropertyContent content={displayContent(data)} />
  }

  return (
    displayProperty(data)
  )
}

export default Property;
