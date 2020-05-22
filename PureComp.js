import React from "react";

class PureComp extends React.PureComponent {
  render() {
    console.log("PureComponent  ----->");
    return <div>Pure Component ----> {this.props.no}</div>;
  }
}

export default PureComp;
