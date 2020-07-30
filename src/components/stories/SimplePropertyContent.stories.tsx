import React from 'react';

import SimplePropertyContent from "../atoms/SimplePropertyContent";

export default {
  component: SimplePropertyContent,
  title: 'Property Simple',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultData = {
  content: 'medley',
};

export const Property = () => <SimplePropertyContent content={defaultData.content}/>;