import React from 'react'
import Com_B5 from './Com_B5'

const Com_B4 = ({value}) => {
  return (
    <div>
      <div className='propsData'>Com_B4 {value}</div>
      <Com_B5 name={value}/>
    </div>
  )
}

export default Com_B4