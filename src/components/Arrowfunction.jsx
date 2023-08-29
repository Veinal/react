import { Alert } from '@mui/material'
import React from 'react'

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

    </div>
  )
}
