import React, { useContext } from "react";
import ContextHook3 from "./Contexthook3";
import { UserContext1, UserContext2 } from "./index.js";

function ContextHook2() {
  const user1 = useContext(UserContext1);
  const user2 = useContext(UserContext2);
  return (
    <div>
      {user1} --- {user2}
      <ContextHook3 />
    </div>
  );
}

export default ContextHook2;
