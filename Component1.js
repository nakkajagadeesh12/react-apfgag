import React from "react";
import Component2 from "./Component2.js";

class Component1 extends React.Component {
  render() {
    return <Component2 name={this.props.name} />;
  }
}

export default Component1;
