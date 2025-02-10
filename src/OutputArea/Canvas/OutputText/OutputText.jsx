import "./OutputText.css";

function OutputText({ text, fontName }) {
  return (
    <>
      <p className={fontName}>{text}</p>
    </>
  );
}

export default OutputText;
