import React from 'react'

export default function Destructuring() {
    const fruits=["apple","banana","orange"];
    //old method
    const a=fruits[0]
    const b=fruits[1]
    const c=fruits[2]

    //new method
    const [aa,bb,cc]=fruits

    const sum = [5+5,10*10,20-5];

    const [x,y,z]=sum

    const profile = {
        name:"veinal",
        age:"21",
        gender:"male"
    }
    const {name,age,gender}=profile

    const cars ={
        brand:"bmw",
        price:"50 mil",
        store:{
            location:"mangalore",
            color:"red"
        }
    }
    const {brand,price,store:{location,color}}= cars
  return (
    <div>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <hr></hr> 

        <h1>{aa}</h1>
        <h1>{bb}</h1>
        <h1>{cc}</h1>
        <hr></hr> 

        <h1>addition-{x} multipication-{y} division-{z}</h1>

        <h1>{name}/ {age}/ {gender}</h1>
        <h1>{brand} {price} {cars.store.location} {cars.store.color}</h1>
    </div>
  )
}
