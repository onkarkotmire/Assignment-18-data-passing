import React from 'react'
import C from './C'

export default function B({data}) {
  return (
    <div>
      <h2>B component</h2>
      <hr />
      <C data={data}/>
    </div>
  )
}
