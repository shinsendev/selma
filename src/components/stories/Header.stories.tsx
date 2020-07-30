import React from 'react';
import Header from "../organisms/Header";
import SimplePropertyContent from "../atoms/SimplePropertyContent"
import { defaultData } from "./SimplePropertyContent.stories"

export default {
  component: Header,
  title: 'Header',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

};

export const header = () => <Header/>;