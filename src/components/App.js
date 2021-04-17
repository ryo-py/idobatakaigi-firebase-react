import React, { useState } from "react";
import SignIn from "./Signin";

export default () => {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div>
      <SignIn setName={setName} />
    </div>
  );
};
