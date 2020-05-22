import React from "react";

class Comp extends React.Component {
  render() {
    console.log("Component  ----->");
    return <div>Normal Component ---> {this.props.no}</div>;
  }
}

export default Comp;
