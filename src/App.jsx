import { useState } from "react";
import "./App.css";
import InputArea from "./InputArea/InputArea.jsx";
import OutputArea from "./OutputArea/OutputArea.jsx";

function App() {
  const [text, setText] = useState("");
  const [fontName, setFontName] = useState("");
  const [fontSize, setFontSize] = useState(20);

  function addText(input) {
    setText(input);
  }

  return (
    <div className="main-container">
      <div className="output-container">
        <OutputArea text={text} fontName={fontName} fontSize={fontSize} />
      </div>
      <div className="input-container">
        <InputArea
          addText={addText}
          setFontName={setFontName}
          setFontSize={setFontSize}
          fontSize={setFontSize}
        />
      </div>
    </div>
  );
}

export default App;
