import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Formtable from './Formtable'

export default function SimpleContainer() {

  
  return (
    < >
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >
            <div  style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <h2>Enter Details</h2>
              <TextField id="outlined-basic" label="Enter name" variant="outlined" style={{width:"200px"}}/>
              <TextField id="outlined-basic" label="Enter phone" variant="outlined" style={{width:"200px"}}/>
              <TextField id="outlined-basic" label="Enter email" variant="outlined" style={{width:"200px"}} />
              <TextField id="outlined-basic" label="Enter address" variant="outlined" style={{width:"200px"}}/>
              <Link to={'/formtable'}><Button variant='filled'>Send</Button></Link>
            </div>
        </Box>


      </Container>
    </>
  );
}