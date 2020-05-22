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

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("this-->", this.inputRef);
    this.inputRef.current.focus();
  }

  render() {
    console.log("parent ----->");
    return (
      <div>
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
        <Component1 name="Jagath" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
