import React, {useState} from "react";
import { connectHits } from 'react-instantsearch-dom';
import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import NumberCartel from "../molecules/cartels/NumberCartel";
import FilmCartel from "../molecules/cartels/FilmCartel";
import PersonCartel from "../molecules/cartels/PersonCartel";
import SongCartel from "../molecules/cartels/SongCartel";
import Cartel from "../molecules/cartels/Cartel";

const Hits = ({ hits }) => {
    return (
        hits.map(hit => {
            switch (hit.modelType) {
                case 'number':
                  return <Cartel><NumberCartel key={hit.uuid} data={hit} /></Cartel>
                case 'film':
                  return <Cartel><FilmCartel key={hit.uuid} data={hit} /></Cartel>
                case 'person':
                  return <Cartel><PersonCartel key={hit.uuid} data={hit} /></Cartel>
                case 'song':
                  return <Cartel><SongCartel key={hit.uuid} data={hit} /></Cartel>
                default:
                  console.log('Error, unrecognized modelType .');
            }
        })
    );
}

const CustomHits = connectHits(Hits);

export default CustomHits;