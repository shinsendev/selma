import React from 'react';
import Info from "../organisms/Info";

export default {
  component: Info,
  title: 'Info',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultData = {
  title: "Info title example",
  content:['First paragraph', 'Second one']
}

export const htmlData = {
  title: "Info title example",
  content:[<span>First <strong>paragraph</strong></span>, 'Second one']
}

export const InfoWithTitle = () => <Info title={defaultData.title} content={defaultData.content}/>;
export const InfoWithoutTitle = () => <Info content={defaultData.content}/>;
export const InfoWithHtml = () => <Info title={defaultData.title} content={htmlData.content}/>;