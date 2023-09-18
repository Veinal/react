import React from 'react'
import {Link} from 'react-router-dom'
import {Button } from '@mui/material';
import Form from './Form'
import Usestate from './Usestate';
import Useeffect from './Useeffect';

export default function Home() {
  return (
    <div>
      <div style={{display:'grid',}}>
        <h1>Home page</h1>
        <Link to='/arrow'><Button variant='contained'>Arrow function</Button></Link>
        <br />
        <Link to='/array'><Button color='success' variant='contained'>Array method</Button></Link>
        <br />
        <Link to='/bootstrap'><Button color='warning' variant='contained'>Bootstrap</Button></Link>
        <br />
        <Link to='/button'><Button color='info' variant='contained'>Button</Button></Link>
        <br />
        <Link to='/card'><Button color='secondary' variant='contained'>Card</Button></Link>
        <br />
        <Link to='/demo'><Button color='error' variant='contained'>Demo</Button></Link>
        <br />
        <Link to='/destructuring'><Button color='error' variant='contained'>Destructuring</Button></Link>
        <br />
        <Link to='/modal'><Button color='primary' variant='contained'>Modal</Button></Link>
        <br />
        </div>
    <Form />
    <Usestate/>
    <Useeffect/>
    </div>
  )
}
