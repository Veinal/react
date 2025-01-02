import React from 'react'

export default function Test() {
    let s=''
    const cal=(n)=>{
        console.log(n)
        s=n.target.value
    }
    let sr='';
    const Sqrt=()=>{
        sr=Math.sqrt(s)
        alert(`square root of ${s} is ${sr}`)
    }

    let array=[1,2,3,4,5,6,7,8,9,10]
    const sqre=array.map((num)=>{
        return (num*num)
    })
    
    let obj={
        id:"123",
        username:"john",
        email:"john@gmail.com",
        address:{
            street:"123 main st",
            city:"anytown",
            zipcode:"12345",
            hobbies:['reading','hiking','coding']
        }
    }
    const {id,username,email,address:{street,city,zipcode,hobbies:[r,...hc]}}=obj

    let obj2={
        id2:1,
        username2:'johndoe',
        email2:'john@example.com',
        address2:"mangalore"
    }
    let obj3={...obj2,phone:"0987654321",username2:"john"}

    const {id2,email2,address2}=obj2
    const {phone,username2}=obj3

    let arr1=[1,2,3,4]
    let arr2=[4,3,5,6,7]
    
    // const [a,b,c,d]=arr1
    // const [e,f,g,h,i]=arr2
    
    const arr3=[...new Set([...arr1,...arr2])]

    let abc=false
    let role="User"
    let msg=abc?`${role} Login successful` : `Please login to access this page`
    
  return (
    <div>
        <input type="number" onChange={(n)=>cal(n)} placeholder='Enter a number to find the square root'></input>
        <br />  
        <button onClick={()=>Sqrt()}>find square root</button>
        <hr />

        <h3>{array}</h3>
        <h3>{sqre[0]},{sqre[1]},{sqre[2]},{sqre[3]},{sqre[4]},{sqre[5]},{sqre[6]},{sqre[7]},{sqre[8]},{sqre[9]}</h3>
        <hr />

        {/* <ol>
            <li>{obj.id}</li>
            <li>{obj.username}</li>
            <li>{obj.address.city}</li>
            <li>{obj.address.hobbies[0]}</li>
            <li>{obj.address.hobbies[1]} {obj.address.hobbies[2]}</li>
        </ol> */}

        <ol>
            <li>{id}</li>
            <li>{username}</li>
            <li>{city}</li>
            <li>{r}</li>
            <li>{hc}</li>
        </ol>

        <ol>
            <li>{id2}</li>
            <li>{username2}</li>
            <li>{email2}</li>
            <li>{phone}</li>
            <li>{address2}</li>
        </ol>

        <h1>{arr3}</h1>
        <h1>{msg}</h1>
    </div>
  )
}
