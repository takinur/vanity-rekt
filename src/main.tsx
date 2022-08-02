import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TaskData from "./Server/API";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App tasks={TaskData} />
  </React.StrictMode>
)
