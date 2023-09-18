import React from 'react'
import Export, { Functionname } from './Export'
import { variable } from './Export'
import { variable2 } from './Export'
import { College } from './Export'

export default function Import() {
  return (
    <div>
        -------Import-----
        <Export/>
        <h2>{variable}</h2>
        <Functionname/>
        <h2>{variable2}</h2>
        <College/>
    </div>
  )
}
