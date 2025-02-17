import { useState } from "react";
import "./Form.css";

function Form({ addText, setFontSize }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addText(input);
    setInput("");
  }

  function increaseFontSize() {
    setFontSize((fontSize) => fontSize + 5);
  }

  function decreaseFontSize() {
    setFontSize((fontSize) => fontSize - 5);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="text-area-container">
        <div className="input-box-container">
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
            <button
              type="button"
              className="size-buttons"
              onClick={increaseFontSize}
            >
              +
            </button>
            <button
              type="button"
              className="decrease-size-buttons"
              onClick={decreaseFontSize}
            >
              -
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
