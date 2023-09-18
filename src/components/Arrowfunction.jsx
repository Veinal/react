import { Alert } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import {Button } from '@mui/material';


export default function Arrowfunction() {
    // function Arrow(){} old
    const Hello = () =>{
        alert("This is arrow function")
    }
    const Name = (x,y)=>{
      alert(`my name is "'${x}"', Age is "'${y}"'`)
    }
  return (
    <div align="center">
        {/* {Hello()} */}
        <button onClick={Hello} class="btn btn-success">Click here</button>
        <button onClick={()=>Name("veinal","21")} class="btn btn-warning">Click here</button>

      <br />
        <Link to='/'><Button color='primary' variant='outlined'>Back</Button></Link>

    </div>
  )
}
