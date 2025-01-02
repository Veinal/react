import React,{useEffect, useState} from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card4modal from './Card4modal'
import Card4modal2 from './Card4modal2'
import {Link} from 'react-router-dom'


export default function Usestate() {

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //   };

    const [color,setColor] = useState("red")
    const [count,setCount] = useState(0)
    const [person,setPerson] = useState({
        name:"name",
        email:"email@gmail.com",
        address:"Address"
    })
    // console.log(color)
    // console.log(count)
    // console.log(person)

    const chngadrs=()=>{
        setPerson({...person,address:"mangalore"})
    }
    const Increment=()=>{
        setCount((prev)=> prev+1)
    }
    const Decrement=()=>{
        setCount((prev)=> prev-1)
    }
    const Reset=()=>{
        setCount((prev)=> 0)
    }


    const [hide,setHide]=useState(false)

    const click=()=>{
        setHide(!hide)
    }
    // console.log(click)

    const [pass,setPass]=useState('password')
    const change=()=>{
        setPass('text')
    }
    const change2=()=>{
        setPass('password')
    }

    const [form,setForm]=useState()

    const Name=(e)=>{
        // setState()
        // console.log(e.target.value)
        console.log({[e.target.name]:e.target.value  })
        // setForm(e.target.value)
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log(form);
    
    const [data,setData]=useState([])

    const handleSubmit = async (e)=>{
        // setData([...data,form])
        e.preventDefault();
        // const value = ([...data,form])
        const newId = value.length===0 ? 1:value[value.length-1].id+1
        let user={
            id:newId,
            ...form
        }
        const newValue=[...value,user]
        setValue(newValue)

        // setData(value)
        localStorage.setItem("Data",JSON.stringify(newValue))
    console.log(newValue)
        
    }
    const Delete=()=>{
        setGet([])
    }
    const Edit=()=>{
        alert('You cant edit')
    }
    // console.log(data,'data');

    const [get1,setGet] = useState([])
    useEffect(()=>{
        const set1=JSON.parse(localStorage.getItem("Data"))
        if(set1){
            setGet(set1)
        }
    },[data])

    console.log(get1)

    let initialValue;
    if(localStorage.getItem("Data")===null){
        initialValue=[];
    } else{
        initialValue=JSON.parse(localStorage.getItem("Data"));
    }
    const [value,setValue]=useState(initialValue)
    // console.log(value,'hi')
    
    // let numbers=[1,2,3,4,5,6]
    // console.log(numbers[numbers.length-1])

    const [open, setOpen] = React.useState(false);
    const [selectedUser,setSelectedUser]=useState('')

    const handleOpen = (i) =>{
        setOpen(true);
        // console.log(i)
        setSelectedUser(i)
        console.log(selectedUser)
    } 
    const handleClose = () => setOpen(false);

    //Delete button

    const [close, setClose] = React.useState(false);

    const handleOpen2=(i) =>{ 
        setClose(true)
        setSelectedUser(i)
    }

    const handleClose2=() => setClose(false)

    

  return (
    <>
        <div>
        <h1 style={{color:color,backgroundColor:'black'}}>{color}</h1>
        <button onClick={()=>setColor('blue','black')}>Blue</button>
        <button onClick={()=>setColor('yellow')}>Yellow</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <br />

        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <br />
        <button onClick={()=>Increment()}>inc funct</button>
        <button onClick={()=>Decrement()}>dec funct</button>
        <button onClick={()=>Reset()}>reset funct</button>

        {/* <h1>{person.name}</h1> */}
        {/* <h1>{person.email}</h1>
        <h1>{person.address}</h1> */}

        <h1>my name is {person.name},am from {person.address}</h1>
        <button onClick={()=>setPerson({...person,address:"mangalore"})}>change address</button>
        <button onClick={()=>chngadrs()}>change address fnct</button>
         <br /><br />


        <input type={hide ? 'text':'password'}  placeholder='Enter your password'/>
        <Button variant="contained" onClick={click}>{hide? 'Hide' : 'Show'}</Button>
        <br />

        <input type={pass} placeholder='enter your password'/>
        {pass=='password' ?
            <button onClick={change}>show</button>
        :
            <button onClick={change2}>hide</button>
        }
        </div>
        <br />

        <hr />
        <div align='center' style={{display:'inline-grid', gap: '10px',marginLeft:'40%' }}>
            <h1><b>INPUT FORM</b></h1>
            <input type="text" name='name' onChange={(e)=>Name(e)} placeholder='Enter your Name'/>
            <input type="number" name='phone' onChange={(e)=>Name(e)} placeholder='Enter your Phone'/>
            <input type="text" name='email' onChange={(e)=>Name(e)} placeholder='Enter your Email'/>
            <input type="password" name='password' onChange={(e)=>Name(e)} placeholder='Enter your Password'/>
            <input type='text' name='image' onChange={(e)=>Name(e)} placeholder='Enter image'/>
            <Button variant="contained" color='success' type='submit' onClick={handleSubmit}>Submit</Button>
        </div>
        <hr />
        
        <div>
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light" >
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Password</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {get1?.map((i)=>{
                    return(
                        <>
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.phone}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td><img src={i.image} alt=" no image found"  style={{width:75}}/></td>
                                <td>
                                    <Button variant="contained" color='success' onClick={()=>handleOpen(i)}>View</Button>
                                    <Link to={`/updateform/${i.id}`}><Button variant="contained" color='primary' >Edit</Button></Link>
                                    <Button variant="contained" color='error' onClick={()=>handleOpen2(i)}>Delete</Button>
                                </td>
                                
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
        >
            
            <Card4modal seluser={selectedUser} handleClose={handleClose}/>                

            {/* <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                View Details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>
            </Box> */}
        </Modal>

        <Modal
            open={close}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          
            
            <Card4modal2 handleClose2={handleClose2} seluser={selectedUser} get1={get1} setGet={setGet}/>                

            
        </Modal>
        </div>
    
    </>

  )
}
