import logo from './logo.svg';
import './App.css';
import CounterOne from './Component/CounterOne';
import CounterTwo from './Component/CounterTwo';
import CounterThree from './Component/CounterThree';
import ComponentA from './Component/ComponentA';
import ComponentB from './Component/ComponentB';
import ComponentC from './Component/ComponentC';

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
