import React, { useState } from "react";
import Input from "./Input";

function Form(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-mono ">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <div className="max-w-md">
        <Input
          type="text"
          name="name"
          value={name}
          className="mt-1 block w-full"
          isFocused={true}
          handleChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
