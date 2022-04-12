import { useState, useMemo } from "react";

export default function UseMemo() {
  const [increaseValue, setIncreaseValue] = useState(0);
  const [increaseSecondValue, setIncreaseSecondValue] = useState(0);

  const pairOrOdd = useMemo(() => {
    let i = 0;
    const test = increaseValue % 2 === 0;
    while (i < 3000000000) i++;
    return test;
  }, [increaseValue]);

  return (
    <div>
      <h1>UseMemo</h1>
      <br />
      <button
        onClick={() => {
          setIncreaseValue(increaseValue + 1);
        }}
      >
        Increase button - {increaseValue}
      </button>{" "}
      - {pairOrOdd ? "pair" : "odd"}
      <br />
      <br />
      <button
        onClick={() => {
          setIncreaseSecondValue(increaseSecondValue + 1);
        }}
      >
        Increase button - {increaseSecondValue}
      </button>
    </div>
  );
}
