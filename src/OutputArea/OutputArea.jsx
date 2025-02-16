import Canvas from "./Canvas/Canvas.jsx";
import DrawingCanvas from "./Canvas/DrawingCanva.jsx";

function OutputArea({ text, fontName, fontSize, color }) {
  return (
    <>
      <DrawingCanvas />
      <Canvas
        text={text}
        fontName={fontName}
        fontSize={fontSize}
        color={color}
      />
    </>
  );
}

export default OutputArea;
