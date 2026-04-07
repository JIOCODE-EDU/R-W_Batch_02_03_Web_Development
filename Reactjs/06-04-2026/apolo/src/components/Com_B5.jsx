import React from 'react'
import { UserContext , AgeContext } from '../App'
import { useContext } from 'react'

const Com_B5 = () => {

  const profile = useContext(UserContext)

  return (
    <>
      {/* <UserContext.Consumer>
        {
          (name) => {
            return(
             <AgeContext.Consumer>
              {
                (age) => {
                  return(
                     <div className='propsData'>This is Components 5 {name}{age}</div>
                  )
                }
              }
             </AgeContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}

      <div className='propsData'>This is Components 5 {profile.name}{profile.age}</div>
    </>
  )
}

export default Com_B5