import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

// Redux with functional components:
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // redux:
    // dispatch({ type: "increment" });

    // redux-toolkit:
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // redux:
    // dispatch({ type: "increase", val: 5 });

    // redux-toolkit:
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // redux:
    // dispatch({ type: "decrement" });

    // redux-toolkit:
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // redux:
    // dispatch({ type: "toggle" });

    // redux-toolkit:
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// -----------------------------------------------

// Redux with class components:
// class Counter extends Component {
//   incrementHandler() {
//     this.props.incrementHandler();
//   }
//   decrementHandler() {
//     this.props.decrementHandler();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // It works like useSelect. Our component will receive the state via props.
// const mapReduxStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// // It works like useDispatch. Our component will receive these disptach functions via props.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementHandler: () => dispatch({ type: "increment" }),
//     decrementHandler: () => dispatch({ type: "decrement" }),
//   };
// };

// //  We can't use hooks in class components, so we use "connect" instead. It receives 2 arguments and then executes to get a new function which will take "Counter" as an argument.
// export default connect(mapReduxStateToProps, mapDispatchToProps)(Counter);
