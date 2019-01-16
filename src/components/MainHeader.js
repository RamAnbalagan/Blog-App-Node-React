import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const MainHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Welcome to Ram's Blog
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MainHeader;