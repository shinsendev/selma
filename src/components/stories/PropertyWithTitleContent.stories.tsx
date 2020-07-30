import React from 'react';

import PropertyWithTitleContent from "../atoms/PropertyWithTitleContent";
import { Typography } from "@material-ui/core";

export default {
  component: PropertyWithTitleContent,
  title: 'Property With Title',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultData = {
  title: 'structure',
  content: 'medley',
};


export const Property = () => <PropertyWithTitleContent title={defaultData.title} content={defaultData.content}/>;