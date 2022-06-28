import React from 'react';
import { Chip, Grid } from '@material-ui/core';

function Chips() {
  const chipLabels = [
    'JavaScript',
    'Health',
    'Reactjs',
    'Food',
    'Front End Development',
    'Nodejs',
  ];

  const chip = chipLabels.map((label) => (
    <Chip key={label} clickable label={label} />
  ));

  return (
    <Grid conteiner>
      <h2>Related Topics</h2>
      {chip}
    </Grid>
  );
}

export default Chips;
