import React from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


export default function Profile() {
  return (
    <div >
      {/* <form action=""> */}
      <div align="center" style={{border:"3px solid black", width : "500px",height : "400px",marginTop: "20px",marginLeft: "500px"}}>  
        <h1>Name :<TextField id="outlined-basic" label="Outlined" variant="outlined" /></h1>
        <h1>Age :<TextField id="outlined-basic" label="Outlined" variant="outlined" /></h1>
        <h1>Phone :<TextField id="outlined-basic" label="Outlined" variant="outlined" /></h1>
        <h1>Email :<TextField id="outlined-basic" label="Outlined" variant="outlined" /></h1>
        <Button variant="contained" endIcon={<SendIcon />}>
        Submit
        </Button>   
      </div> 
      {/* </form> */}

    </div>
  )
}
