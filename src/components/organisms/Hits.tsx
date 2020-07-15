import React, {useState} from "react";
import { connectHits } from 'react-instantsearch-dom';
import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import NumberCartel from "../molecules/cartels/NumberCartel";
import FilmCartel from "../molecules/cartels/FilmCartel";
import PersonCartel from "../molecules/cartels/PersonCartel";
import SongCartel from "../molecules/cartels/SongCartel";

const Hits = ({ hits }) => {
    return (
        hits.map(hit => {
            switch (hit.modelType) {
                case 'number':
                  return <NumberCartel key={hit.uuid} data={hit} />
                case 'film':
                  return <FilmCartel key={hit.uuid} data={hit} />
                case 'person':
                  return <PersonCartel key={hit.uuid} data={hit} />
                case 'song':
                  return <SongCartel key={hit.uuid} data={hit} />
                default:
                  console.log('Error, unrecognized modelType .');
            }
        })

    );
}

const CustomHits = connectHits(Hits);

export default CustomHits;