import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Comp from "./Comp.js";
import PureComp from "./PureComp.js";
import FunComp from "./funComp.js";
import Test1 from "./test1.js";
import Test2 from "./test2.js";
import Render1 from "./render1.js";
import Render2 from "./render2.js";
import Component1 from "./Component1";
import { Provider } from "./Component";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      posts: []
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("this-->", this.inputRef);
    this.inputRef.current.focus();
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => this.setState({ posts: response.data }))
      .catch(error => console.log("err", error));
  }

  render() {
    console.log("parent ----->");
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map(data => <h1 key={data.id}>{data.title}</h1>)}
        <h1>parent component</h1>
        <input type="text" ref={this.inputRef} />
        <hr />
        <Test1 />
        <hr />
        <Test2 />
        <hr />
        <Render1 />
        <hr />
        <Render2 />
        <hr />
        <Provider value="Jagath">
          <Component1 />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
