import React from "react";

const Test = OrgCom => {
  class NewComp extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return <OrgCom fun={this.increment} click={this.state.count} />;
    }
  }
  return NewComp;
};

export default Test;
