import React from "react";
import "./style.css";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      pwd: ""
    };
  }
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    const { userName, email, pwd } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.change}
              placeholder="userName"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.change}
              placeholder="Email-Id"
            />
          </div>
          <div>
            <input
              type="password"
              name="pwd"
              value={pwd}
              onChange={this.change}
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
