import "./Canvas.css";
import OutputText from "./OutputText/OutputText.jsx";

function Canvas({ text, fontName, fontSize }) {
  return (
    <div className="canvas-container">
      <OutputText text={text} fontName={fontName} fontSize={fontSize} />
    </div>
  );
}

export default Canvas;
