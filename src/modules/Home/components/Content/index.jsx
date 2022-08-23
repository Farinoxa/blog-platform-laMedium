import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  TextField,
  IconButton,
} from '@material-ui/core/';
import { SearchOutlined } from '@material-ui/icons';
import Article from '../Articles';
import Chips from '../../../shared/Chips';
import classes from '../../../shared/Chips/Chips.module.css';
import { useArticleContext } from '../../../shared/context';

import './Content.css';

function Content() {
  const { appliedFilter, setAppliedFilter, filtredArticles } =
    useArticleContext();
  const handleChipsChange = (currentCategory) => {
    if (appliedFilter.categories.includes(currentCategory)) {
      setAppliedFilter((filterValue) => ({
        ...filterValue,
        categories: appliedFilter.categories.filter(
          (chip) => chip !== currentCategory,
        ),
      }));
    } else {
      setAppliedFilter((filterValue) => ({
        ...filterValue,
        categories: [...appliedFilter.categories, currentCategory],
      }));
    }
  };

  return (
    <div className="contentContainer">
      <div className="themeCover">
        <Paper
          elevation={0}
          variant="outlined"
          className="themeCoverPaper"
          style={{
            backgroundImage: `url(https://source.unsplash.com/random)`,
          }}
        >
          <Container>
            <div className="themeCoverOverlay" />
            <Typography variant="h4">
              What Matters to You Matters to Us
            </Typography>
          </Container>
        </Paper>
      </div>

      <Grid
        className="mainContent"
        container
        spacing={1}
        justifyContent="space-around"
        alignContent="center"
        md={12}
      >
        <Grid
          container
          spacing={1}
          justifyContent="space-around"
          alignContent="center"
          md={9}
          className="article"
        >
          {filtredArticles.map((article) => (
            <Grid key={article.title} item md={5}>
              <Article article={article} />
            </Grid>
          ))}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          className="barText"
          md={3}
        >
          <Grid item md={11}>
            <Typography id={classes.topicsTitle} variant="h5">
              Related Topics
            </Typography>
            <TextField
              fullWidth
              className={classes.searchInput}
              variant="outlined"
              placeholder="Search"
              onChange={(event) =>
                setAppliedFilter((searchValue) => ({
                  ...searchValue,
                  search: event.target.value,
                }))
              }
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            justifyContent="space-around"
            alignItems="center"
            md={12}
          >
            <Chips handleChipsChange={handleChipsChange} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
