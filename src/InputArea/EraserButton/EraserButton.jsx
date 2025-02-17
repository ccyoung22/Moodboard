function EraserButton({ setEraser }) {
  function toggleEraser() {
    setEraser(true);
    setTimeout(() => setEraser(false), 0);
  }

  return <button onClick={toggleEraser}>Clear Drawing</button>;
}

export default EraserButton;
