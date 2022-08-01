import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "./API";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
export default class CreateTodo extends Component {
  
  //Set value upon change
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      name: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

  }
  render() {
    return (
      <div>
        <p>React Create Todo Component!</p>
        <form className="h-screen" onSubmit={this.handleSubmit}>
          <div>
            <Label forInput="email" value="Email" />

            <Input
              type="text"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              handleChange={onHandleChange}
            />
          </div>
          <Button className="ml-4" processing={processing}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
