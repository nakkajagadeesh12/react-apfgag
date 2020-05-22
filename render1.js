import React from "react";
import NewComp from "./renderProps.js";

class Render1 extends React.Component {
  render() {
    return (
      <NewComp
        render={({ fun, click }) => {
          return (
            <div>
              <button onClick={fun}>click {click} times</button>
            </div>
          );
        }}
      />
    );
  }
}

export default Render1;
