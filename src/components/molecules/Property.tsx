import { Typography } from "@material-ui/core";
import React from "react";
import Timecode from "../../helpers/timecode";
import PropertyWithTitleContent from "../atoms/PropertyWithTitleContent";
import SimplePropertyContent from "../atoms/SimplePropertyContent";
import { Link } from "gatsby"

const Property = ({data}) => {

  const blank = 'blank';

  function displayContent(content:any, type:string):string {
    if (type === 'list') {
      if ('options' in data && 'listPropertyTitle' in data.options) {
        return displayList(content, data.options.listPropertyTitle);
      }
      return displayList(content);
    }

    else if (type === 'timecode') {
      return displayTimeCode(content);
    }

    else if (type === 'attribute') {
      return displayAttribute(content)
    }

    else if (type === 'attribute-list') {
      return displayAttributeList(content, data.options);
    }

    return content;
  }

  function displayAttributeList(list, options) {
    let response = blank;
    if(list.length > 0) {
      //todo : to complete
      console.log('display attributes = '+list);
      response = '';
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // (property)? response = response+item[property] :response = response+item;
        }
        else {
          // (property)? response = response+item[property]+', ' :response = response+item+', ';
        }
      });
    }
    console.log(options);
    return response;
  }

  function displayLink(content, uuid:string, model:string) {
    return <Link to={model+'/'+uuid}>{content}</Link>
  }

  function displayTimeCode(timecode:number):string {
    return Timecode.convert(timecode);
  }

  function displayAttribute(content) {
    //todo: to complete
    return content;
  }

  function displayList(list:Array<any>, property:string = '') {
    let response = blank;
    if(list.length > 0) {
      response = '';
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // if there is no property, we don't need to use it (for person, we need to get person.fullname but for censorship we directly use the value of the censorship)
          (property)? response = response+item[property] :response = response+item;
        }
        else {
          (property)? response = response+item[property]+', ' :response = response+item+', ';
        }
      });
    }
    return response;
  }

  function displayProperty(content, type, title = null) {
    if (title) {
      return <PropertyWithTitleContent title={data.title}  content={displayContent(data.content, data.type)} />
    }
    return <SimplePropertyContent  content={displayContent(data.content, data.type)} />

  }

  return (
    // <Typography variant="body1"><span className='property-title'>{title}: </span>{displayContent(content, type)}</Typography>
    displayProperty(data.content, data.type, data.title)
  )
}

export default Property;
