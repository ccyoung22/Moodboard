import "./InputArea.css";
import Form from "./Form/Form.jsx";

function InputArea({ addText }) {
  return (
    <div className="input-bar">
      <Form addText={addText} />
    </div>
  );
}

export default InputArea;
