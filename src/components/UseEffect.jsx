import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [countAge, setCountAge] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAge = () => {
    setCountAge(countAge + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>UseEffetc</h1>
      <h3>Couter</h3>
      Value: {count}
      <br />
      <br />
      <button onClick={increment}>Count+</button>
      <br />
      <br />
      <button onClick={incrementAge}>CountAge {countAge}</button>
    </div>
  );
}
