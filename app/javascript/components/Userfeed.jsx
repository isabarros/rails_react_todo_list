import React, { Fragment } from 'react'
import { Typography, Container } from '@material-ui/core'
import AppMenu from 'components/AppMenu'

export default props =>
<Fragment>
  <AppMenu/>
  <Container style={{display: 'flex', justifyContent: 'center'}}>
    <Typography variant='h6' align='center' style={{margin: '2% 10% 2% 10%'}}>
      Favourites
    </Typography>
    <Typography variant='h6' align='center' style={{margin: '2% 10% 2% 10%'}}>
      My Lists
    </Typography>
    <Typography variant='h6' align='center' style={{margin: '2% 10% 2% 10%'}}>
      Shared with me
    </Typography>
  </Container>
</Fragment>
