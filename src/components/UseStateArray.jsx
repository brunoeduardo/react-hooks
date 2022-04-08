import { useState } from "react";

export default function UseStateArray() {
  const listStyle = { height: "150px", overflow: "auto" };

  const [inputValue, setInputValue] = useState("");
  const [arrayList, setArrayList] = useState([]);

  const submit = () => {
    if (!inputValue) return;

    const value = {
      id: Math.random(),
      text: inputValue,
    };

    setArrayList([value, ...arrayList]);
  };

  const remove = (id) => {
    setArrayList(arrayList.filter((e) => e.id !== id));
  };

  const update = (item) => {
    setArrayList(
      arrayList.map((el) =>
        el.id === item.id ? { id: el.id, text: `${el.text} - edited` } : el
      )
    );
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
      <button onClick={submit}>Add</button>
      <br />
      <br />
      <ul style={listStyle}>
        {arrayList.map((e) => {
          return (
            <li key={e.id}>
              {e.text} <br /> <button onClick={() => update(e)}>Update</button>
              <button onClick={() => remove(e.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
