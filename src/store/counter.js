import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// createSlice manages a slice of our global state. And when we have different pieces of state that are not related, then we create more than on slice. (maybe each one in a different file)
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // Here, it seems that we're changing a property of our state but we're not because it's forbidden.
    // Redux-toolkit creates a new state object, keeps state that we're not changing and updates only the state that we're updating.
    // So, code here is immutable.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload is a constant and cannot be changed in redux-toolkit
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// here we export actions from the slice which are the methods of dispatch
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
