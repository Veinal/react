import React from 'react'

export default function Spreadoperator() {
    const array1=[1,2,3,4,5]
    const array2=[6,7,8,9,0]
    const spread=[...array1,...array2]

    const object1={
        a:"apple",
        b:"ball",
        c:"cat"
    }
    const object2={
        d:"dog",
        e:"elephant",
        f:"fan"
    }
    const object3={...object1,...object2}
    // console.log(object1)
    // console.log(object2)
    console.log(object3)

    const x=[1,2,3,4,5,4,3,2,1,0]
    const [one,two,...rest] = x
    
    // const y=[6,7,8,9]
    // const z=[...x,...y]

    const obj1={
        name:"veinal",
        phone:"9384733829",

    }
    // const obj2={
    //     address:"mangalore"
    // }
    const obj3={address:"mangalore",...obj1}
    console.log(obj3)
  return (
    <div>
        <hr/>
        <h2>{array1}</h2>
        <h2>{array2}</h2>
        <h2>{spread}</h2>

        {/* <h2>{object1}</h2>
        <h2>{object2}</h2> */}
        {/* <h2>{object3}</h2> */}
        
        <h2>{one}  {two}</h2>
        <h2>{rest}</h2>
    </div>
  )
}
