import React, { useState } from 'react'
import myContext from './ContextAPI'
import B from './B'

export default function A() {
    const[data, setData] = useState("geeks")
  return (
    <div style={{display: "flex", flexDirection:"column", gap: "20px"}}>
      <h2>A component</h2>
      <button style={{width:"150px", marginLeft:"600px"}} onClick={()=>{
        setData("geekster")
      }}>Pass Data</button>
      <hr />
      <myContext.Provider value={data}>
        <B/>
      </myContext.Provider>
    </div>
  )
}
