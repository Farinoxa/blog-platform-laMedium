import React, { useState } from 'react';
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
import articles from '../../constants';
import Chips from '../../../shared/Chips';

import './Content.css';

function Content() {
  const [value, setValue] = useState('');

  const filtredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="contentContainer">
      <div className="themeCover">
        <Paper
          elevation={0}
          variant="outlined"
          className="themeCoverPaper"
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
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
            <Grid item md={5}>
              <Article key={article.title} article={article} />
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
            <Typography variant="h5"> Related Topics</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              onChange={(event) => setValue(event.target.value)}
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
            <Chips />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
