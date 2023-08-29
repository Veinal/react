import React from 'react'

export default function variable() {
    var a=10;
    let b=20;
    const c=30;
    a=20;
    b=30;
    // c=40;
    let name="rahul";
    if(true){
        let name="kiran"
        console.log(name,11)
    }
    console.log(name,22)
  return (
    <div>
        {a}
        {b}
        {c}
    </div>
  )
}
