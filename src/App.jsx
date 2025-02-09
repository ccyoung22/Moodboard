import { useState } from "react";
import "./App.css";
import InputArea from "./InputArea/InputArea.jsx";
import OutputArea from "./OutputArea/OutputArea.jsx";

function App() {
  const [text, setText] = useState("Hello");

  function addText(input) {
    setText(input);
  }

  return (
    <>
      <InputArea addText={addText} />
      <OutputArea text={text} />
      <p className="initialized">App initialized</p>
    </>
  );
}

export default App;
