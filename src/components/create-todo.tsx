import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "./API";

export default class CreateTodo extends Component {
  render() {
    //Making usestate for storing and fetching data
    const [name, setname] = useState("");
    const [completed, setCompleted] = useState('');
    //using UseNavigate to navigate to the next page
    let history = useNavigate();

    //function to handle the submit event
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Reload
        //adding the new task to the list of tasks
        Tasks.push({
            id: Tasks.length + 1,
            name: name,
            createdAt: 'time',
            completed: false,
        });
        //navigating to the next page
        history("/");
    }
    //TODO: Add the form to the page

    return (
      <div>
        <p>React Create Todo Component!</p>

      </div>
    );
  }
}
