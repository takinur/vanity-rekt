import React, { useState } from "react";
import FilterButton from "./FilterButton";
import Form from "./From";
import Todo from "./todo-task";

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
  //List of TODOS
  const taskList = tasks.map((task) => (
    <Todo key={task.id} toggleTaskCompleted={toggleTaskCompleted} removeTask={removeTask} {...task} />
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
  function removeTask (id){
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" />
        <FilterButton name="Done" />
        <FilterButton name="Eh" />
      </div>
      <h2 id="list-heading">{remain}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
};

export default todoApp;
