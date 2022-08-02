import { useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoApp from "./components/todo-app";
import TasksData from "./components/API";

export default function App() {
  const [count, setCount] = useState(0);
  const d = new Date();

  return (
    <div className="App">
      {/* Router is not required still added */}
      <Router>
        <Routes>
          <Route path="/" element={<TodoApp tasks={TasksData} />} />
        </Routes>
      </Router>

    </div>
  );
}
