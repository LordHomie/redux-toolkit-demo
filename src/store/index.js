// With redux:
// import redux from "redux";
// import { createStore } from "redux";

// const allStates = { counter: 0, showCounter: true };

// const counterReducer = (state = allStates, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.val,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

// ---------------------------------------------------------------

// With redux-toolkit:
import { createStore } from "redux";
// There's also createReducer but createSlice is more powerful
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// we can do this if we have one reducer only
// const store = createStore(counterSlice.reducer);

// configureStore is just like createStore but it merges all reducers into one main global reducer
// There's also combineReducers from redux package but we didn't use it
const store = configureStore({
  // reducer: counterSlice.reducer, // if we have just one reducer
  reducer: { counter: counterReducer, authentication: authReducer }, // if we have multiple reducers, then we can list them inside this object
});

export default store;
