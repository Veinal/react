import React from 'react'

export default function Export() {
  return (
    <div>
        -------Export-------
    </div>
  )
}

export const variable ="value"

export const Functionname=()=>{
    return <h1>i am exporting an function using named export</h1>
}

const variable2 = "value2(grouped export)"

export const College=()=>{
    
    const name='veinal';
    const age=21
    const phone=987654312
}

export {variable2}