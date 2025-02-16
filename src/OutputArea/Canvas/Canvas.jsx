import "./Canvas.css";
import OutputText from "./OutputText/OutputText.jsx";

function Canvas({ text, fontName, fontSize, color }) {
  return (
    <div className="canvas-container">
      <OutputText
        text={text}
        fontName={fontName}
        fontSize={fontSize}
        color={color}
      />
    </div>
  );
}

export default Canvas;
