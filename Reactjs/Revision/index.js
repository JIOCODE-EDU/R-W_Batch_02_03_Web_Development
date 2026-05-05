const redux = require("redux")
const createStore = redux.createStore

// constant

const BUY_ITEM = "BUY_ITEM"
const BUY_ICE_CREAME = "BUY_ICE_CREAME"

// action creator

function buy_item(){
  return{
    type:BUY_ITEM
  }
}

function buy_ice(){
  return{
    type:BUY_ICE_CREAME
  }
}

// initialState

const initialState = {
  item:10,
  ice_cream:20
};

// reducer

const ItemReducer = (state = initialState , action) => {
  switch(action.type){
    case BUY_ITEM:return{
      ...state , item:state.item + 1
    }
     case BUY_ICE_CREAME:return{
      ...state , ice_cream:state.ice_cream + 1
    }
    default: return state
  }
}

// store

const store = createStore(ItemReducer)

// store subscribe

console.log("initialState" , store.getState());

store.subscribe(() => console.log("Updated state" , store.getState()))


store.dispatch(buy_ice())
store.dispatch(buy_ice())
store.dispatch(buy_item())





