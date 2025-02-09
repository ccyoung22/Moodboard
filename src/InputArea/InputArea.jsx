import "./InputArea.css";
import Form from "./Form/Form.jsx";

function InputArea({ addText }) {
  return (
    <div className="bar-container">
      <span className="arrow">⬆️</span>
      <div className="input-bar">
        <Form addText={addText} />
      </div>
    </div>
  );
}

export default InputArea;
