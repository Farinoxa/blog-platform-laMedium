import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Grid } from '@material-ui/core';
import articles from '../../Home/constants';
import './Chips.css';

function Chips({ handleChipsChange }) {
  const chipLabels = [...new Set(articles.map((article) => article.category))];

  return (
    <Grid item md={6} className="chipsContainer">
      <Chip
        id="chip"
        key="All"
        clickable
        label="All"
        onClick={() => handleChipsChange('')}
      />
      {chipLabels.map((label) => (
        <Chip
          id="chip"
          key={label}
          clickable
          label={label}
          onClick={() => handleChipsChange(label)}
        />
      ))}
    </Grid>
  );
}

Chips.propTypes = {
  handleChipsChange: PropTypes.string.isRequired,
};

export default Chips;
