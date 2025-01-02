import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Arrow from './Arrowfunction'
import Arraymethod from './Arraymethod'
import Bootstrap from './Bootstrap'
import Button from './Button'
import Card from './Card'
import Demo from './Demo'
import Error from './Error'
import Destructuring from './Destructuring'
import Modal from './Modal'
// import Formtable from './Formtable'
import Form from './Form'
import Card4modal from './Card4modal'

import Formtable from './Formtable'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Updateform from './Updateform'

export default function Router() {
  let arrayobj2=[
    {
      name:"name1",
      phone:8476827642,
      email:"email1@gmail.com",
      address:"Address1"
    },
    {
      name:"name2",
      phone:9847387238,
      email:"emmail2@gmail.com",
      address:"Address2"
    }
  ]
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/arrow' element={<Arrow />} />
            <Route exact path='/array' element={<Arraymethod />} />
            <Route exact path='/bootstrap' element={<Bootstrap />} />
            <Route exact path='/button' element={<Button />} />
            <Route exact path='/card' element={<Card />} />
            <Route exact path='/demo' element={<Demo />} />
            <Route exact path='/destructuring' element={<Destructuring />} />
            <Route exact path='/modal' element={<Modal />} />

            <Route exact path='/formtable' element={<Formtable arrayobj2={arrayobj2}/>} />
            <Route exact path='/usestate' element={<Usestate />} />
            <Route exact path='/useeffect' element={<Useeffect />} />
            <Route exact path='/card4modal' element={<Card4modal/>}/>
            <Route exact path='/updateform/:id' element={<Updateform />} />
 
            <Route exact path='*' element={<Error />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}
