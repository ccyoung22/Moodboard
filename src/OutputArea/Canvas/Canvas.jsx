import "./Canvas.css";
import OutputText from "./OutputText/OutputText.jsx";

function Canvas({ text, fontName }) {
  return (
    <div className="canvas-container">
      <OutputText text={text} fontName={fontName} />
    </div>
  );
}

export default Canvas;
