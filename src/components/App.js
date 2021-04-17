import React, { useState } from "react";

import Main from "./Main";
import SignIn from "./Signin";

export default () => {
  const [name, setName] = useState("");
  console.log(name);
  if (name === "") {
    return (
      <div>
        <SignIn setName={setName} />
      </div>
    );
  } else {
    return (
      <div>
        <Main name={name} />
      </div>
    );
  }
};
