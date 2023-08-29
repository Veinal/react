import React from 'react'

export default function demo() {
    function example(){
        alert('hello')
    }
  return (
    <div>
        <h1>this is my new component</h1>
        <button onClick={example}>click here</button>
    </div>
  )
}
