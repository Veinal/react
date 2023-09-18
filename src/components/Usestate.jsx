import React,{useState} from 'react'
import { Button } from '@mui/material'

export default function Usestate() {
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

    const handleSubmit=(e)=>{
        setData([...data,form])
        // setForm({})
    }
    const Delete=()=>{
        setData([])
    }
    const Edit=()=>{
        alert('You cant edit')
    }
    // console.log(data,'data');
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
        <div align="center" style={{display:'inline-grid', gap: '10px' }}>
            <input type="text" name='name' onChange={(e)=>Name(e)} placeholder='Enter your Name'/>
            <input type="number" name='phone' onChange={(e)=>Name(e)} placeholder='Enter your Phone'/>
            <input type="text" name='email' onChange={(e)=>Name(e)} placeholder='Enter your Email'/>
            <input type="password" name='password' onChange={(e)=>Name(e)} placeholder='Enter your Password'/>
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
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {data?.map((i)=>{
                    return(
                        <>
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.phone}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td>
                                    <Button variant="contained" color='error' onClick={Delete}>Delete</Button>
                                    <Button variant="contained" color='primary' onClick={Edit}>Edit</Button>
                                </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        </div>
    
    </>

  )
}
