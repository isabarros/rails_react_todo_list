import React, { Fragment } from 'react';
import AppMenu from 'components/AppMenu'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

export default props =>
  <Fragment>
    <AppMenu/>
    <Typography variant='h4' align='center' style={{marginTop: '20%'}}>
      <Box fontWeight='fontWeightBold'>
        TODO List
      </Box>
    </Typography>
    <Typography variant='h5' align='center'>
      Your daily helper on task managing!
    </Typography>
  </Fragment>
