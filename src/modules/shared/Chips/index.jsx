import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Grid } from '@material-ui/core';
import classNames from 'classnames';
import articles from '../../Home/constants';
import classes from './Chips.module.css';

function Chips({ handleChipsChange, chipsArr }) {
  const chipLabels = [...new Set(articles.map((article) => article.category))];
  return (
    <Grid item md={6} className={classes.chipsContainer}>
      {chipLabels.map((label) => (
        <Chip
          key={label}
          classes={{
            root: classNames(classes.chip, {
              [classes.chipSelected]: chipsArr.includes(label),
            }),
          }}
          clickable
          label={label}
          onClick={() => {
            handleChipsChange(label);
          }}
        />
      ))}
    </Grid>
  );
}

Chips.propTypes = {
  handleChipsChange: PropTypes.func.isRequired,
  chipsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Chips;
