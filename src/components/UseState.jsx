import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>UseState</h1>
      <h3>Couter</h3>
      Value: {count}
      <br />
      <br />
      <button onClick={increment}>Count+</button>
      <br />
      <br />
      {/* simple form to call setCount */}
      <button onClick={() => setCount(count + 1)}>Count+</button>
    </div>
  );
}
