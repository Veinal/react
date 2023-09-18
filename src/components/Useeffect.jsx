import React,{useEffect} from 'react'
import { useState } from 'react'
import {Button} from '@mui/material'

export default function Useeffect() {
    const [count,setCount]=useState(0)
    const [multi,setMulti]=useState(0)


    useEffect(()=>{
        setTimeout(()=>{
            setCount((prev)=>prev+1)
        },1000)
    },[])
    // console.log(count)


    useEffect(()=>{
        setMulti(count*count)
    },[count])
  return (
    <div>
        <br /><br /><hr />
        <h2>{count}</h2>
        <Button variant='contained' onClick={()=>setCount(count+1)}>Add</Button>
        <h2>Square of {count} is {multi}</h2>
    </div>
  )
}
