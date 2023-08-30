import "./styles.css";
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, incrementByAmount} from './counter'
interface RootState {
  counter:{
    count: number
  }
}
export default function App() {
  const {count} = useSelector((state: RootState)=> state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Count is: {count}</h1>
      <button onClick={()=>dispatch(increment())}> Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(10))}>Add By 10 </button>
    </div>
  );
}
