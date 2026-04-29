/* Redux : State Management Library for JavaScript Applications */

const redux = require("redux");
const createStore = redux.createStore;

// 1. State
const initialState = {
  counter: 0,
  number: 10
};

// 2. Action
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const INCREMENT_NUMBER = "INCREMENT_NUMBER";
const DECREMENT_NUMBER = "DECREMENT_NUMBER";

//3. Action Creator

function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

function incrementNumber() {
  return {
    type: INCREMENT_NUMBER,
  };
}

function decrementNumber() {
  return {
    type: DECREMENT_NUMBER,
  };
}

// 4. Reducer

const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case INCREMENT_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT_NUMBER:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// 5. Store

const store =  createStore(rootReducer , initialState)

console.log("Initial State : ", store.getState());

store.subscribe(() => {
    console.log("Updated State : ", store.getState());
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementNumber());
store.dispatch(incrementNumber());
store.dispatch(decrementNumber());

