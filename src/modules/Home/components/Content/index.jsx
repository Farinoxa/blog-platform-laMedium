import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
} from '@material-ui/core/';
import Article from '../Articles';
import article from '../../constants';
import Chips from '../../../shared/Chips';

import './Content.css';

function Content() {
  return (
    <div className="contentContainer">
      <div className="themeCover">
        <Paper
          elevation={0}
          variant="outlined"
          className="themeCoverPaper"
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className="themeCoverOverlay" />
            <Grid item>
              <Typography variant="h4">
                What Matters to You Matters to Us
              </Typography>
            </Grid>
          </Container>
        </Paper>
      </div>
      <div className="mainContent">
        <Container>
          <Grid container spacing={10}>
            <Grid item md={9}>
              <Article
                userAvatar={article.userAvatar}
                userName={article.userName}
                title={article.title}
                description={article.description}
                newsPicture={article.newsPicture}
              />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item md={3}>
              <Chips />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Content;
