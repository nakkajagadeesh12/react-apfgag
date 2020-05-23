import React, { useState, useReducer } from "react";

const initialState = {
  count: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + action.value };
    case "DEC":
      return { count: state.count - action.value };
    case "RES":
      return initialState;
    default:
      return state;
  }
};

function Example1() {
  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {JSON.stringify(initialState)}
      {number.count}
      <button onClick={() => dispatch({ type: "INC", value: 3 })}>
        Increment BY 3
      </button>
      <button onClick={() => dispatch({ type: "DEC", value: 4 })}>
        Decrement BY 4
      </button>
      <button onClick={() => dispatch({ type: "RES" })}>Reset</button>
    </div>
  );
}

export default Example1;
