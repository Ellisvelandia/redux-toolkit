import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
}

export default App;
