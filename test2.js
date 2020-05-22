import React from "react";
import Test from "./test.js";

class Test2 extends React.Component {
  render() {
    const { fun, click } = this.props;
    return (
      <div>
        <button onMouseOver={fun}>MouseOver {click} times</button>
      </div>
    );
  }
}

export default Test(Test2);
