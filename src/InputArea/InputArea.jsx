/* eslint-disable react/prop-types */
import "./InputArea.css";
import Form from "./Form/Form.jsx";
import FontMenu from "./FontMenu/FontMenu.jsx";
import { ColorPicker } from "primereact/colorpicker";
import PenButton from "./PenButton/PenButton.jsx";

function InputArea({
  addText,
  setFontName,
  setFontSize,
  color,
  setColor,
  setPen,
  pen,
}) {
  return (
    <div className="bar-container">
      <img src="/src/assets/arrow.png" alt="arrow" className="arrow" />
      <div className="input-bar">
        <Form addText={addText} setFontSize={setFontSize} />
        <FontMenu setFontName={setFontName} />
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        <PenButton setPen={setPen} pen={pen} />
      </div>
    </div>
  );
}

export default InputArea;
