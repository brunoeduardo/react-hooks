import { useState } from "react";

const formModel = {
  name: "",
  lastName: "",
};

export default function UseStateObject() {
  const [valueForm, setValueForm] = useState({ formModel });

  const setFormValue = (e) => {
    const { name, value } = e.target;
    setValueForm({ ...valueForm, [name]: value });
  };

  return (
    <div>
      <h1>UseState Object</h1>
      <h3>Data Form</h3>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => setFormValue(e)}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          onChange={(e) => setFormValue(e)}
          placeholder="Last name"
        />
      </div>
      <div>
        <br />
        <br />
        My name is: {valueForm.name}
        <br />
        and my last name is: {valueForm.lastName}
      </div>
    </div>
  );
}
