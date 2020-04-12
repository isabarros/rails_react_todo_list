import React, { Fragment } from 'react';
import AppMenu from 'components/AppMenu'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

export default props =>
  <Fragment>
    <AppMenu/>
    <div style={{position: 'absolute', top: '50%', width: '100%'}}>
      <Typography variant='h4' align='center'>
        <Box fontWeight='fontWeightBold'>
          TODO List
        </Box>
      </Typography>
      <Typography variant='h5' align='center'>
        Your daily helper on task managing!
      </Typography>
    </div>
  </Fragment>
