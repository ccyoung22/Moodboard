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
  const [penColor, setPenColor] = useState("#000000");
  const [strokeSize, setStrokeSize] = useState(6);

  function addText(input) {
    setText(input);
  }

  return (
    <div className="main-container">
      <DrawingCanvas
        isPenActive={pen}
        penColor={penColor}
        strokeSize={strokeSize}
      />
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
          penColor={penColor}
          setPenColor={setPenColor}
          strokeSize={strokeSize}
          setStrokeSize={setStrokeSize}
        />
      </div>
    </div>
  );
}

export default App;
