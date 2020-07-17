import { Container, Tooltip, Typography } from "@material-ui/core"
import React from "react";
import "../../styles/searchPage.css";
import {
  ClearRefinements,
  RefinementList,
  Configure,
  RangeInput,
  Panel
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';
import '../../styles/components/facets.css';
import HelpIcon from "@material-ui/icons/Help";

const Facets = () => {
  return (
    <article>
      <div className="clear-refinements">
        <ClearRefinements />
      </div>

      <div className="facet-wrapper">
        <Panel header="Model Type">
          <RefinementList attribute="modelType" />
        </Panel>
      </div>

      <div className="facet-wrapper">
        <Panel header="Film Year">

          <RangeInput attribute="releasedYear" />
        </Panel>
      </div>


        <div className="facet-wrapper">
            <Panel header="Sample">
              <RefinementList attribute="sample" />
              <Tooltip title={
                <React.Fragment>
                  <Typography>“Sample” means that the film belongs to the first representative sample defined to start the database (about 10% of the whole corpus).</Typography>
                </React.Fragment>
              } arrow>
                <HelpIcon/>
              </Tooltip>
            </Panel>
        </div>

      <div className="facet-wrapper">
        <Panel header="Studios">
          <RefinementList attribute="studios.name" />
        </Panel>
      </div>

      <div className="facet-wrapper">
        <Panel header="Film length">
          <RangeInput attribute="length" />
        </Panel>
      </div>

      <div className="facet-wrapper">
        <Panel header="Number Length">
          <RangeInput attribute="numbersLength" />
        </Panel>
      </div>

      <Configure hitsPerPage={24} />
    </article>
  );
}

export default Facets;
