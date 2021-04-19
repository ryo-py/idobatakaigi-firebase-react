import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import { pushMessage } from "../firebase";

const MessagerField = ({ inputEl, name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log("text: ", text);
  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "ryo", text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessagerField;
