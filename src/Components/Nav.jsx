import React from 'react';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';

const Nav = () => {
    return (
      <AppBar position='static' sx={{margin:'50px', width: '1500px'}}>
        <Toolbar>
          <Stack direction='row' spacing={2}>
            <Button color='inherit' href="/">Home</Button>
            <Button color='inherit' href="/addretro">Add Retrospective</Button>
            <Button color='inherit' href='/addfeedback'>Add Feedback</Button>
            <Button color='inherit' href='/viewall'>View Retrospectives</Button>
            <Button color='inherit' href='/viewbydate'>View Retrospective By Date</Button>
          </Stack>
        </Toolbar>
        
      </AppBar>
    );
  }

export default Nav;