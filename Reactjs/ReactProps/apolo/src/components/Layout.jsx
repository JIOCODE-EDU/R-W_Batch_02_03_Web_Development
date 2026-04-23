import React from 'react'
import Com_B from './Com_B'

const Layout = (props) => {
  return (
    <div>
      <div className='propsData'>Layout {props.name}</div>
      <Com_B name={props.name}/>
    </div>
  )
}

export default Layout