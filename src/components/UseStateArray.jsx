import { useState } from "react";

export default function UseStateArray() {
  const listStyle = { height: "50px", overflow: "auto" };

  const [inputValue, setInputValue] = useState("");
  const [arrayList, setArrayList] = useState([]);

  const submit = () => {
    if (!inputValue) return;

    const value = {
      id: arrayList.length + 1,
      text: inputValue,
    };

    setArrayList([value, ...arrayList]);
  };

  const addItem = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>UseState Array</h1>
      <h3>List</h3>
      <input type="text" name="item" onChange={(e) => addItem(e)} />
      <br />
      <br />
      <input type="button" value="Add" onClick={submit} />
      <br />
      <br />
      <ul style={listStyle}>
        {arrayList.map((e) => {
          return <li key={e.id}>{e.text}</li>;
        })}
      </ul>
    </div>
  );
}
