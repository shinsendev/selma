import { Typography } from "@material-ui/core";
import React from "react";
import "../../styles/searchPage.css";
import {
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';

const Facets = () => {
  return (
    <article>
      <ClearRefinements />
      <Typography variant='h5'>Item type</Typography>
      <RefinementList attribute="modelType" />

      <Typography variant='h5'>Film Date</Typography>
      <RefinementList attribute="releasedYear" />

      <Typography variant='h5'>Sample</Typography>
      <RefinementList attribute="sample" />

      <Typography variant='h5'>Film Length</Typography>
      <RefinementList attribute="length" />

      <Typography variant='h5'>Studios</Typography>
      <RefinementList attribute="studios.name" />

      <Typography variant='h5'>Number Length</Typography>
      <RefinementList attribute="numbersLength" />

      {/*<Typography variant='h5'>Film of a number Released Year</Typography>*/}
      {/*<RefinementList attribute="films.releasedYear" />*/}
      <Configure hitsPerPage={24} />
    </article>
  );
}

export default Facets;
