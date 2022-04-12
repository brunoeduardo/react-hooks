import "./App.css";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import UseEffectCallApi from "./components/UseEffectCallApi";
import UseEffectCleanup from "./components/useEffectCleanup/UseEffectCleanup";
import UseCallBack from "./components/useCallBack/UseCallBacks";
import UseMemo from "./components/UseMemo";

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
      <UseEffectCleanup></UseEffectCleanup>
      <hr />
      <UseCallBack></UseCallBack>
      <hr />
      <UseMemo></UseMemo>
      <hr />
    </div>
  );
}

export default App;
