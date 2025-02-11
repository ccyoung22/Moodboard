import Canvas from "./Canvas/Canvas.jsx";

function OutputArea({ text, fontName, fontSize }) {
  return (
    <>
      <Canvas text={text} fontName={fontName} fontSize={fontSize} />
    </>
  );
}

export default OutputArea;
