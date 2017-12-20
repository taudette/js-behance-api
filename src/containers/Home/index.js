import React from 'react';
import Search from '../Search';
import Users from '../Users';
import { Grid } from 'react-bootstrap';

const HomeContainer = () => {
  return (
    <Grid>
      <Search />
      <Users />
    </Grid>  
  )
}

export default HomeContainer