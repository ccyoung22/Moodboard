import { useState } from "react";
import "./App.css";
import InputArea from "./InputArea/InputArea.jsx";
import OutputArea from "./OutputArea/OutputArea.jsx";

function App() {
  const [text, setText] = useState("");

  function addText(input) {
    setText(input);
  }

  return (
    <div className="main-container">
      <div className="output-container">
        <OutputArea text={text} />
      </div>
      <div className="input-container">
        <InputArea addText={addText} />
      </div>
    </div>
  );
}

export default App;
