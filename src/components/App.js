import React, { useState } from "react";

import Main from "./Main";
import SignIn from "./Signin";

import config from "../config.json";
console.log(config);

export default () => {
  const [name, setName] = useState("");
  if (config.signInEnabled && name === "") {
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
