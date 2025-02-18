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
      <img src="/arrow.png" alt="arrow" className="arrow" />
      <div className="input-bar">
        <Form addText={addText} setFontSize={setFontSize} />
        <div className="font-color-container">
          <FontMenu setFontName={setFontName} />
          <div className="text-colour-container">
            <p className="colour-text">Text Colour:</p>
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
          </div>
        </div>
        <div className="pen-eraser-button-container">
          <PenButton setPen={setPen} pen={pen} />
          <EraserButton setEraser={setEraser} />
        </div>
        <div className="pen-stroke-container">
          <div className="pen-colour-div-container">
            <p className="pen-colour-p-label">Pen Colour:</p>
            <ColorPicker
              value={penColor}
              onChange={(e) => setPenColor(e.value)}
            />
          </div>
          <StrokeWidth strokeSize={strokeSize} setStrokeSize={setStrokeSize} />
        </div>
      </div>
    </div>
  );
}

export default InputArea;
