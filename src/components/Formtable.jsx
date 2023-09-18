import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

export default function Props({arrayobj2}) {

    // console.log(props.prop_name)
    // console.log(props.prop_name2)
    console.log(arrayobj2)

  return (
    <div>
        {/* <h1 style={{color:"green"}}>{props.prop_name}</h1>
        <h1>{props.prop_name2}</h1> */}

        
        <table className="table">
            <thead>
                <tr>
                <th>Sl no</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {arrayobj2.map((i,index)=>{
                    return (
                        <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.phone}</td>
                                <td>{i.email}</td>
                                <td>{i.address}</td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        <br />
        <Link to='/'><Button color='primary' variant='outlined'>Back</Button></Link>

    </div>
  )
}
