import React, { useState } from "react";
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
    <div className="border-2 border-red-500 flex justify-center py-7 bg-gray-300">
      <div className="w-2/3 border-2 border-green-400">
        <h1 className="font-semibold text-green-500 text-2xl text-center">
          React Todo App with TailwindCSS, Vite and Typescript
        </h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">{fiterList}</div>
        <h2 id="list-heading">{remain}</h2>
        <ul
          role="list"
          className="border-2 border-indigo-500"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </div>
  );
};

export default todoApp;
