import React from 'react'
import Com_B2 from './Com_B2'

const Com_B = (props) => {
  return (
    <div>
      <div className='propsData'>Com_B {props.name}</div>
      <Com_B2 name={props.name}/>
    </div>
  )
}

export default Com_B