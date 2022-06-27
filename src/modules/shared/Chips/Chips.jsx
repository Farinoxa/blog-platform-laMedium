import React from 'react';
import { Chip, Grid } from '@material-ui/core';

function Chips() {
  return (
    <Grid container>
      <h2>Related Topics</h2>

      <Chip clickable label="Java Script" />
      <Chip clickable label="Health" />
      <Chip clickable label="Reactjs" />
      <Chip clickable label="Food" />
      <Chip clickable label="Front End Development" />
      <Chip clickable label="Nodejs" />
    </Grid>
  );
}

export default Chips;
