import { useState } from "react";

function Form({ addText }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addText(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add Text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
