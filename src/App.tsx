import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoList from './components/todo-list'
import CreateTodo from './components/create-todo'
import EditTodo from './components/edit-todo'


export default function App() {
  const [count, setCount] = useState(0)
  const d = new Date()

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
      <div>
        <h1 className='text-red-500'>Well Hello there!  {d.getHours() % 12 } {d.getMinutes() } { d.getSeconds()}</h1>
      </div>
      
    </div>
  )
}

