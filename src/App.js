import { CounterClass, CounterFunction } from './components'
import './style.css'

function App() {
  return (
    <>
      <CounterClass id='counter' initialCount={5}/>
      <CounterFunction className="Counter" initialCount={10}/>
    </>
  );
}

export default App;
