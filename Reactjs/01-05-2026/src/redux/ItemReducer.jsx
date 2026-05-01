import React from 'react'
import { ADD_ITEM , UPDATE_ITEM , REMOVE_ITEM } from './Constant'

const initialState = {
  items:[],
  nextId:1
}

const ItemReducer = (state = initialState , action) => {
  switch(action.type){
    case ADD_ITEM:
     const newItem = {
      id:state.nextId,
      name:action.payload.name,
      description:action.payload.description
     }

     return{
      ...state,
      items:[...state.items , newItem],
      nextId:state.nextId + 1
     }

     case UPDATE_ITEM:
      return{
        ...state,
        items:state.items.map((item) => item.id === action.payload.id ? {...item , name:action.payload.name, description:action.payload.description} : item)
      }

      case REMOVE_ITEM:
        return{
          ...state,
          items:[state.items.filter((item) => item.id !== action.payload.id)]
        }
        
      default: return state
  }
}

export default ItemReducer