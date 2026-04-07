import React from 'react'
import Com_B3 from './Com_B3'
import Com_B4 from './Com_B4'

const Com_B2 = (props) => {
  return (
    <div>
      <div className='propsData'>Com_B2 {props.name}</div>
      <Com_B3 value={props.name}/>
      <Com_B4 value={props.name}/>
    </div>
  )
}

export default Com_B2