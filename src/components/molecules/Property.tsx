import React from "react";
import Timecode from "../../helpers/timecode";
import PropertyWithTitleContent from "../atoms/PropertyWithTitleContent";
import SimplePropertyContent from "../atoms/SimplePropertyContent";
import { Link } from "gatsby";

const Property = ({data}) => {

  const blank = 'blank';

  // Called by displayList, we select the content to display : list, timecode, attribute, attribute list
  function displayContent(data):string {
    const type = data.type;
    const content = data.content;

    if (type === 'list') {
      if ('options' in data && 'listPropertyTitle' in data.options) {
        return displayList(content, data.options.listPropertyTitle);
      }
      return displayList(content);
    }

    else if (type === 'timecode') {
      return displayTimeCode(content);
    }

    return content;
  }

  // todo: check if usefull
  function displayLink(content, uuid:string, model:string) {
    return <Link to={model+'/'+uuid}>{content}</Link>
  }

  function displayTimeCode(timecode:number):string {
    return Timecode.convert(timecode);
  }

  function displayList(list:Array<any>, property:string = '') {
    let response = blank;
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
  function displayProperty(data) {

    if (data.title) {
      return <PropertyWithTitleContent title={data.title}  content={displayContent(data)} />
    }
    return <SimplePropertyContent content={displayContent(data)} />
  }

  return (
    displayProperty(data)
  )
}

export default Property;
