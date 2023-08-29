import React from 'react'

export default function Arraymethod() {
    let fruits=["apple ","mango ","banana "]
    let arr=[{
        name:"veinal",
        age: 21,
        address:"mangalore"
    }]
  return (
    <div>
        <h2>{fruits}</h2>
        <ol>
            {fruits.map((row)=>{
                return <li>{row}</li>
            })}
        </ol>
        {arr.map((row1)=>{
            return (
            <>
            <p>{row1.name}</p>
            <p>{row1.age}</p>
            <p>{row1.address}</p>
            </>
            )
        })}
    </div>
  )
}
