import React from 'react'
import D from './D'
import myContext from './ContextAPI'
import { useContext } from 'react'

export default function C() {
    let contextData = useContext(myContext)
  return (
    <div>
      <h2>C component</h2>
      <hr />
      {/* <D data={data}/> */}
      <p>Passed data is : {contextData}</p>
      <D/>
    </div>
  )
}
