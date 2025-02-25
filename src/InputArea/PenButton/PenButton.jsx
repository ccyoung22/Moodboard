import { useState } from "react";
import "./PenButton.css";

function PenButton({ setPen, pen }) {
  function togglePen() {
    setPen((prevPen) => !prevPen);
    console.log("hi hello");
    console.log(pen);
  }

  return (
    <>
      <button onClick={togglePen} className="penButton">
        {pen ? (
          <img src="/pen-on-icon.png" className="penImg" />
        ) : (
          <img src="/pen-off-icon.png" className="penImg" />
        )}
      </button>
    </>
  );
}

export default PenButton;
