import React from "react";
import Test from "./test.js";

class Test1 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fun}>click {this.props.click} times</button>
      </div>
    );
  }
}

export default Test(Test1);
