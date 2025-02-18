import "./EraserButton.css";

function EraserButton({ setEraser }) {
  function toggleEraser() {
    setEraser(true);
    setTimeout(() => setEraser(false), 0);
  }

  return (
    <button onClick={toggleEraser} className="clear-button">
      CLEAR
    </button>
  );
}

export default EraserButton;
