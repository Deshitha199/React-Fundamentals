import UseState from './components/useState/UseState';
import UseStateArray from './components/useState/UseStateArray';
import UseStateFunctionalCounter from './components/useState/UseStateFunctionalCounter';
import UseStateObject from './components/useState/UseStateObject';




function App() {
  return (
    <div className="App">
      <h1 className='main-title'>React Hooks</h1>
      <UseState />
      <UseStateArray />
      <UseStateObject />
      <UseStateFunctionalCounter />
    </div>
  );
}

export default App;
