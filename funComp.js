import React from "react";

function FunComp({ no }) {
  console.log("memo----->");
  return (
    <>
      <div>{no}</div>
      <button onClick={()=>{}}>click</button>
    </>
  );
}

export default React.memo(FunComp);
