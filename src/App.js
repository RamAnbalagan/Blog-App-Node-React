import React, { Fragment } from 'react';
import { Route,Switch,BrowserRouter
} from 'react-router-dom';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import MainHeader from './components/MainHeader';
import MainPage from './components/MainPage';
import PostsList from './components/PostsList';


const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <MainHeader />
    <main className={classes.main}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route  path="/posts" component={PostsList} />
      </Switch>
      </BrowserRouter>

    </main>
  </Fragment>
);

export default withStyles(styles)(App);