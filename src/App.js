import "./App.css";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import UseEffectCallApi from "./components/useEffectCallApi";

function App() {
  return (
    <div className="App">
      <UseState></UseState>
      <hr />
      <UseStateObject></UseStateObject>
      <hr />
      <UseStateArray></UseStateArray>
      <hr />
      <UseEffect></UseEffect>
      <hr />
      <UseEffectCallApi></UseEffectCallApi>
      <hr />
    </div>
  );
}

export default App;
