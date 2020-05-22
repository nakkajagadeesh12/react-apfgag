import React from "react";
import Component3 from "./Component3.js";

class Component2 extends React.Component {
  render() {
    return <Component3 name={this.props.name} />;
  }
}

export default Component2;
