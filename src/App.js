import "./App.css";
import UseState from "./components/UseState";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";

function App() {
  return (
    <div className="App">
      <UseState></UseState>
      <hr />
      <UseStateObject></UseStateObject>
      <hr />
      <UseStateArray></UseStateArray>
    </div>
  );
}

export default App;
