import { ADD_ITEM  , REMOVE_ITEM , UPDATE_ITEM } from "./Constant";


export const addItem = (item) => {
  return{
    type:ADD_ITEM,
    payload:item
  }
}

export const updateItem = (item) => {
  return{
    type:UPDATE_ITEM,
    payload:item
  }
}

export const removeItem = (id) => {
  return{
    type:REMOVE_ITEM,
    payload:id
  }
}