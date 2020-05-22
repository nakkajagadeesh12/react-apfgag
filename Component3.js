import React from "react";
import { Consumer } from "./Component.js";

class Component3 extends React.Component {
  render() {
    return (
      <Consumer>
        {name => {
          return (
            <div>
              <h1>My Name is {name}</h1>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Component3;
