import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

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
      <div className="py-4 text-center">
        <Label
          forInput={name}
          className="text-center font-sans text-2xl text-green-600 mb-4"
        >
          What is on your bucket list?
        </Label>
        <Input
          type="text"
          name="name"
          id={name}
          value={name}
          className="mt-4 py-3 px-7 block bg-gray-200 w-3/4 mx-auto"
          isFocused={true}
          handleChange={handleChange}
        />
        <Button className="w-3/4 mx-auto py-2 px-6 text-indigo-700 mt-4 rounded-sm border-2 border-indigo-700 shadow-lg block hover:bg-indigo-600 hover:text-white" onClick={() => alert ('Noni')}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default Form;
