import React from "react";
import { UserContext1, UserContext2 } from "./index.js";

function ContextHook3() {
  return (
    <div>
      <UserContext1.Consumer>
        {user1 => {
          return (
            <UserContext2.Consumer>
              {user2 => {
                return (
                  <div>
                    My Name is {user1} {user2}
                  </div>
                );
              }}
            </UserContext2.Consumer>
          );
        }}
      </UserContext1.Consumer>
      ;
    </div>
  );
}

export default ContextHook3;
