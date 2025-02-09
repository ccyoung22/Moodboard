import { useState } from "react";
import "./Form.css";

function Form({ addText }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addText(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="text-area-container">
        <div className="text-area-container">
          <textarea
            className="input-box"
            type="text"
            value={input}
            placeholder="Add Text"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <div className="size-button-container">
            <button className="size-buttons">+</button>
            <button className="size-buttons">-</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
