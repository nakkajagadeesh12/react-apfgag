import React from "react";
import NewComp from "./renderProps.js";

class Render2 extends React.Component {
  render() {
    const { fun, click } = this.props;
    return (
      <NewComp
        render={({ fun, click }) => {
          return (
            <div>
              <button onMouseOver={fun}>MouseOver {click} times</button>
            </div>
          );
        }}
      />
    );
  }
}

export default Render2;
