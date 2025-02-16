import { useState } from "react";

function PenButton({ setPen, pen }) {
  function togglePen() {
    setPen((prevPen) => !prevPen);
    console.log("hi hello");
    console.log(pen);
  }

  return (
    <>
      <button onClick={togglePen}>{pen ? "Pen Off" : "Pen On"}</button>
    </>
  );
}

export default PenButton;
