import "./OutputText.css";

function OutputText({ text, fontName, fontSize }) {
  return (
    <>
      <p className={fontName} style={{ color: "red", fontSize: fontSize }}>
        {text}
      </p>
    </>
  );
}

export default OutputText;
