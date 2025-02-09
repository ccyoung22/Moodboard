import "./Canvas.css";
import OutputText from "./OutputText/OutputText.jsx";

function Canvas({ text }) {
  return (
    <div className="canvas-container">
      <OutputText text={text} />
    </div>
  );
}

export default Canvas;
