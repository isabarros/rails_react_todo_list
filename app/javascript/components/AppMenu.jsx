import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

export default props =>
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={useStyles().title}>
          TODO List
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Fragment>
