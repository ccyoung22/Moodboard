/* eslint-disable react/prop-types */
import "./InputArea.css";
import Form from "./Form/Form.jsx";
import FontMenu from "./FontMenu/FontMenu.jsx";
import { ColorPicker } from "primereact/colorpicker";
import PenButton from "./PenButton/PenButton.jsx";
import StrokeWidth from "./StokeWidth/StrokeWidth.jsx";
import EraserButton from "./EraserButton/EraserButton.jsx";

function InputArea({
  addText,
  setFontName,
  setFontSize,
  color,
  setColor,
  setPen,
  pen,
  penColor,
  setPenColor,
  strokeSize,
  setStrokeSize,

  setEraser,
}) {
  return (
    <div className="bar-container">
      <img src="/src/assets/arrow.png" alt="arrow" className="arrow" />
      <div className="input-bar">
        <Form addText={addText} setFontSize={setFontSize} />
        <FontMenu setFontName={setFontName} />
        <p>Select a Font Colour:</p>
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        <PenButton setPen={setPen} pen={pen} />
        <EraserButton setEraser={setEraser} />
        <p>Select a Pen Colour:</p>
        <ColorPicker value={penColor} onChange={(e) => setPenColor(e.value)} />
        <StrokeWidth strokeSize={strokeSize} setStrokeSize={setStrokeSize} />
      </div>
    </div>
  );
}

export default InputArea;
