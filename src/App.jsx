import { useState } from "react";
import "./App.css";
import InputArea from "./InputArea/InputArea.jsx";
import OutputArea from "./OutputArea/OutputArea.jsx";
import { ColorPicker } from "primereact/colorpicker";
import DrawingCanvas from "./DrawingCanva.jsx";

function App() {
  const [text, setText] = useState("");
  const [fontName, setFontName] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState("#000000");
  const [pen, setPen] = useState(false);

  function addText(input) {
    setText(input);
  }

  return (
    <div className="main-container">
      <DrawingCanvas isPenActive={pen} />
      <div className="output-container">
        <OutputArea
          text={text}
          fontName={fontName}
          fontSize={fontSize}
          color={color}
        />
      </div>
      <div className="input-container">
        <InputArea
          addText={addText}
          setFontName={setFontName}
          setFontSize={setFontSize}
          fontSize={setFontSize}
          setColor={setColor}
          color={color}
          setPen={setPen}
          pen={pen}
        />
      </div>
    </div>
  );
}

export default App;
