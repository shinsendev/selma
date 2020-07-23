import React from "react";
import Timecode from "../../helpers/timecode";
import PropertyWithTitleContent from "../atoms/PropertyWithTitleContent";
import SimplePropertyContent from "../atoms/SimplePropertyContent";
import { Link } from "gatsby";
import { PropertyData } from "../../interfaces/PropertyData"
import AttributeLink from "../atoms/AttributeLink"

const Property = ({data}) => {

  const blank:string = 'blank';

  /**
   * @param data
   */
  function  getType(data:PropertyData):string {
    let type:string = 'default';

    if (typeof data.type !== 'undefined') {
      type = data.type;
    }
    return type;
  }

  /**
   * @param data
   */
  function displayAttribute(data:PropertyData) {
    return <Link to={data.model+'/'+data.uuid}>{data.content}</Link>
  }

  /**
   * @param timecode
   */
  function displayTimeCode(timecode:number):string {
    return Timecode.convert(timecode);
  }

  /**
   * @param data
   */
  function displayList(data:PropertyData) {
    let response = blank;
    let list = data.content;
    let property = data.options.listPropertyTitle;

    console.log('ici???');
    console.log(data);

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

  function displayAttributeList(data:PropertyData) {
    let response = [];
    let list = data.content;
    let property = data.property;
    let uuid = data.uuid;

    if (list > 0) {
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // if there is no property, we don't need to use it (example: for person, we need to get person.fullname but for censorship we directly use the value of the censorship)
          (property)? response.push(<AttributeLink uuid={uuid} content={item[property]}/>) :response.push(<AttributeLink uuid={data.uuid} content={item}/>);
        }
        else {
          (property)? response.push(<AttributeLink uuid={uuid} content={item[property]}/>) :response.push(<AttributeLink uuid={data.uuid} content={item}/>);

          (property)? response.push(<AttributeLink uuid={uuid} content={item[property]}/> , ) :response.push(<AttributeLink uuid={data.uuid} content={item}/> , );
        }
      });

      return response;
    }
  }

  // Called by displayList, we select the content to display : list, timecode, attribute
  /**
   * @param data
   */
  function displayContent(data:PropertyData):any {
    // get type
    const type = getType(data);
    const content = data.content;

    switch(type) {
      case 'list':
        return displayList(data);
      case 'timecode':
        return displayTimeCode(content);
      case 'attribute':
        return displayAttribute(data);
      case 'attributeList':
        return displayAttributeList(data);
      default:
        return content;
    }
  }

  // first function to display a Property and select if we display or not the title
  /**
   * @param data
   */
  function displayProperty(data:PropertyData) {
    if (typeof data.title !== 'undefined') {
      return <PropertyWithTitleContent title={data.title} content={displayContent(data)} />
    }
    return <SimplePropertyContent content={displayContent(data)} />
  }

  return (
    displayProperty(data)
  )}

export default Property;
