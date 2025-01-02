import React from 'react'
import {Button} from '@mui/material'
import {useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'


export default function Updateform() {

    const params=useParams()
    const navigate=useNavigate()
    // console.log(params.id)

    let userID=params.id;

    const [upd,setUpd]=useState([])
    const [disp,setDisp]=useState([])
    const [index,setIndex]=useState([])

    useEffect(()=>{
        const locget=JSON.parse(localStorage.getItem("Data"))
        setUpd(locget)
        //using filter function
        // const new1=locget.filter((item2)=>item2.id==userID)
        // setDisp(new1)

        //using find function

        let select=locget.find((obj)=>obj.id==userID)
        console.log(select,'select');
        setDisp(select)

        const UserIndex=locget.findIndex((e)=>e.id==userID)
        setIndex(UserIndex)
        console.log(UserIndex,'index');

    },[])
    console.log(upd,'upd')
    console.log(disp,'disp')

    const handleChange=(e)=>{
      setDisp({...disp,[e.target.name]:e.target.value})
      // const {name,phone,email,password,image}=disp
    }

//splice(index,removeitem,value)

    const handleSubmit=async()=>{
      const updatedData=[...upd]
      updatedData.splice(index,1,disp)
      localStorage.setItem("Data",JSON.stringify(updatedData))
      await navigate('/')
    }
  return (
    <div>
        <div align='center' style={{display:'inline-grid', gap: '10px',marginLeft:'40%' }}>
            <h1><b>UPDATE FORM</b></h1>
            <input type="text" name='name' onChange={(e)=>handleChange(e)} value={disp?.name}  placeholder='Enter your Name'/>
            <input type="number" name='phone' onChange={(e)=>handleChange(e)} value={disp?.phone}  placeholder='Enter your Phone'/>
            <input type="text" name='email' onChange={(e)=>handleChange(e)} value={disp?.email} placeholder='Enter your Email'/>
            <input type="password" name='password' onChange={(e)=>handleChange(e)} value={disp?.password} placeholder='Enter your Password'/>
            <input type='text' name='image' onChange={(e)=>handleChange(e)} value={disp?. image} placeholder='Enter image'/>
            <Button variant="contained" color='success' type='submit' onClick={handleSubmit}>Submit</Button>
        </div>
    </div>
  )
}
