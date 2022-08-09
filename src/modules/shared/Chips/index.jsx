import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Chip, Grid } from '@material-ui/core';
import classNames from 'classnames';
import articles from '../../Home/constants';
import classes from './Chips.module.css';
import dataContext from '../context';

function Chips({ handleChipsChange }) {
  const context = useContext(dataContext);
  const chipLabels = [...new Set(articles.map((article) => article.category))];
  return (
    <Grid item md={6} className={classes.chipsContainer}>
      <Chip
        classes={{
          root: classNames(classes.chip, {
            [classes.chipSelected]: context.categories.includes(''),
          }),
        }}
        clickable
        label="All"
        onClick={() => {
          handleChipsChange('');
        }}
      />
      {chipLabels.map((label) => (
        <Chip
          key={label}
          classes={{
            root: classNames(classes.chip, {
              [classes.chipSelected]: context.categories.includes(label),
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
};

export default Chips;
