import React from 'react'

export default function Props({prop_name,prop_name2,arrayobj}) {

    // console.log(props.prop_name)
    // console.log(props.prop_name2)
    console.log(arrayobj)

  return (
    <div>
        {/* <h1 style={{color:"green"}}>{props.prop_name}</h1>
        <h1>{props.prop_name2}</h1> */}

        <h1>{prop_name}</h1>
        <h1>{prop_name2}</h1>

        <table class="table">
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
                {arrayobj.map((i,index)=>{
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
    </div>
  )
}
