import React from 'react'

export default function Ternaryoperator() {
    let name = "veinal";
    // if(name=true){
    //     alert('right name')
    // }
    // else{
    //     alert('wrong answer')
    // }

    // name=true?alert('correct'):alert('false')

    // name=="veinal"?
    //     alert('correct')
    // :
    //     alert('wrong')

    const Button1=(x)=>{
       
        console.log(x)
        x==true?alert('TRUE'):
        x==false?alert('FALSE'): 
        alert('doesnt exist')
    }

    const Button2=(y)=>{
        y=="veinal"?alert('VEINAL'):y=="ismail"?alert('ISMAIL'):alert("AMRITH")
    }

    let num1=''

    const Change=(e)=>{
        console.log(e);
        num1=e.target.value
    }

    const Button3=()=>{
        num1%2==0?
            alert('even')
        :
            alert('odd')
    }

    let g=''
    let grade=''
    
    const Marks=(f)=>{
        console.log(f);
        g=f.target.value
    }

    const Button4=()=>{
        grade=
        g>=90?'distinction'
        :
        g>=75?'first class'
        :
        g>=60?'second class'
        :
        g>=35?'third class'
        :
        'Fail'
        alert(grade)
    }
  return (
    <div>
        <button class="btn btn-success m-2" onClick={()=>Button1(true)}>true</button>
        <button class="btn btn-primary m-2" onClick={()=>Button1(false)}>false</button>
        <button class="btn btn-secondary m-2" onClick={()=>Button1("no data")}>check</button>
        <br/>
        <hr></hr>
        <button class="btn btn-success m-2" onClick={()=>Button2("veinal")}>V</button>
        <button class="btn btn-danger m-2" onClick={()=>Button2("ismail")}>I</button>
        <button class="btn btn-primary m-2" onClick={()=>Button2("amrith")}>A</button>
        <br/>

        <input type='number' onChange={(e)=>Change(e)} placeholder='enter a number' ></input>
        <button class="btn btn-success m-2" onClick={()=>Button3()}>find</button>
        <br/>

        <input type="number" onChange={(f)=>Marks(f)} placeholder='enter your marks' style={{backgroundColor:"bisque",borderRadius:"10px"}}></input>
        <button class="btn btn-primary m-2" onClick={()=>Button4()} style={{borderRadius:"20px"}}>find grade</button>

    </div>
  )
}
