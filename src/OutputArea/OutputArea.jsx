import Canvas from "./Canvas/Canvas.jsx";

function OutputArea({ text, fontName }) {
  return (
    <>
      <Canvas text={text} fontName={fontName} />
    </>
  );
}

export default OutputArea;
