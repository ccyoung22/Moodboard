import "./OutputText.css";

function OutputText({ text, fontName, fontSize, color }) {
  return (
    <>
      <p
        className={fontName}
        style={{ color: `#${color}`, fontSize: fontSize }}
      >
        {text}
      </p>
    </>
  );
}

export default OutputText;
