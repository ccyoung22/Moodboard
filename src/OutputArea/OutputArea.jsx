import Canvas from "./Canvas/Canvas.jsx";

function OutputArea({ text, fontName, fontSize, color }) {
  return (
    <>
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
