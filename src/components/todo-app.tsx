import { useState } from "react";
import FilterButton from "./FilterButton";
import Form from "./From";
import Todo from "./todo-task";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Done: (task) => task.completed,
};

//Used for LOOP for HMR Issue
const FILTER_NAMES: string[] = [];
for (let key in FILTER_MAP) {
  FILTER_NAMES.push(key);
}
//BUG:Better option but HMR
//const FILTER_NAMES = Object.keys(FILTER_MAP);

const todoApp = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  //Filter Tasks
  const [filter, setFilter] = useState("All");
  const fiterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  //List of TODOS
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .slice(0)
    .reverse() //Reverse array to show the newest tasks first
    .map((task) => (
      <Todo
        {...task}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        removeTask={removeTask}
        editTask={editTask}
      />
    ));
  const addTask = (name) => {
    // alert(`Added ${name}`);
    setTasks([...tasks, { id: tasks.length + 1, name, completed: false }]);
  };
  //Remaining Tasks
  const tasksNoun = tasks.length === 1 ? "task" : "tasks";
  const remain = `${
    tasks.filter((task) => !task.completed).length
  } ${tasksNoun} remaining`;
  //Remove a todo
  function removeTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  //Edit a todo
  function editTask(id, name) {
    const editedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name };
      }
      return task;
    });
    setTasks(editedTask);
  }

  return (
    <div className="border-2 flex justify-center py-7 bg-gray-200 min-h-screen">
      <div className="container px-6 py-10 mx-auto md:mt-11 bg-gray-50 rounded-2xl w-full md:w-4/5 pb-9">
        <h1 className="font-semibold font-mono text-dark text-3xl uppercase text-center mb-6">
          React Todo App with TailwindCSS, Vite and Typescript
        </h1>
        <Form addTask={addTask} />

        <div className="flex items-center justify-center space-x-2 sm:space-x-3 w-3/4 mx-auto">         
          {fiterList}
        </div>
        <h2 className="font-sans font-semibold text-lg text-gray-800 mt-3">{remain}</h2>
        <ul
          role="list"
          className="w-full"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </div>
  );
};

export default todoApp;
