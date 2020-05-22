import React from "react";

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
      return (
        <div>
        {
          this.props.render({
            fun:this.increment,
            click:this.state.count
          })
        }
        </div>
      )     
    }
  }
  

export default NewComp;
