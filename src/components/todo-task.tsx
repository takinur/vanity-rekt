import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  const handleClick = () => {
    // e.preventDefault();
    setEditing(true);
    setNewName(props.name);
  }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="md:flex items-center p-6 space-x-6 bg-slate-200 rounded-xl shadow-lg hover:shadow-xl  my-2">
        <div className=" bg-gray-100 p-4 w-full md:w-5/6 space-x-4 rounded-lg">
          <Input
            id={props.id}
            type="text"
            className="bg-gray-100 outline-none w-full"
            isFocused={true}
            handleChange={handleChange}
            value={newName}
          />
        </div>
        <Button
          
          onClick={() => SubmitEvent}
          className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          Save
        </Button>
        <Button
          onClick={() => setEditing(false)}
          className="bg-gray-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="container w-full">
      <div className="md:flex items-center p-6 space-x-6 bg-slate-200 rounded-xl shadow-lg hover:shadow-xl  my-2">
        <div className="flex items-center mr-4 mb-2">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
            className="opacity-0 absolute h-8 w-8"
          />
          <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
            <svg
              className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#1F73F1"
                  fillRule="nonzero"
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-3/4 space-x-4 rounded-lg">
          <p className="text-lg font-mono leading-5 text-gray-800">
            {props.name}
          </p>
        </div>
        <Button
          onClick={handleClick}
          className="bg-teal-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          Edit
        </Button>
        <Button
          onClick={() => props.removeTask(props.id)}
          className="bg-red-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          Delete
        </Button>
      </div>
    </div>
  );
  return (
    <div>
      <li className=" my-1">{isEditing ? editingTemplate : viewTemplate}</li>
    </div>
  );
};

export default Todo;


//TODO: Add Validation to FORM Input
