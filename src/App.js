// import logo from './logo.svg';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';
// import { decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={ ()=> dispatch(increment(5))}>+</button>
      <button onClick={ ()=> dispatch(decrement())}>-</button>
      {isLoggedIn ? <h1>You are logged in</h1> : <h1>You are not logged in </h1>}
      {/* <h3>Valuable information I shouldn't see: {isLoggedIn}</h3> */}
    </div>
  );
}

export default App;
