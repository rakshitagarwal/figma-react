import React, { useContext, useState } from "react";
import { MyContext } from "../utils/MyContext.js";

const Context = () => {
  const { text, setText } = useContext(MyContext);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSetText = () => {
    if (inputText.trim() !== "") {
      setText(inputText);
      setInputText("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Enter new text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleSetText}>Set Text</button>
    </div>
  );
};

export default Context;
