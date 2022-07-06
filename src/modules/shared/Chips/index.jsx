import React from 'react';
import { Chip, Grid } from '@material-ui/core';
import './Chips.css';

function Chips() {
  const chipLabels = [
    'JavaScript',
    'Health',
    'Reactjs',
    'Food',
    'Front End Development',
    'Nodejs',
  ];

  return (
    <Grid item md={6} className="chipsContainer">
      {chipLabels.map((label) => (
        <Chip id="chip" key={label} clickable label={label} />
      ))}
    </Grid>
  );
}

export default Chips;
