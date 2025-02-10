import "./InputArea.css";
import Form from "./Form/Form.jsx";
import FontMenu from "./FontMenu/FontMenu.jsx";

function InputArea({ addText, setFontName }) {
  return (
    <div className="bar-container">
      {/* <span className="arrow">⬆️</span> */}
      <img src="/src/assets/arrow.png" alt="arrow" className="arrow" />
      <div className="input-bar">
        <Form addText={addText} />
        <FontMenu setFontName={setFontName} />
      </div>
    </div>
  );
}

export default InputArea;
