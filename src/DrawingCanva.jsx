import { useState, useRef } from "react";
import getStroke from "perfect-freehand";

const DrawingCanvas = () => {
  const [strokes, setStrokes] = useState([]);
  const isDrawing = useRef(false); // Track whether the mouse is held down
  const canvasRef = useRef(null); // Reference to the canvas element

  const handlePointerDown = (e) => {
    isDrawing.current = true; // Start drawing

    const rect = canvasRef.current.getBoundingClientRect(); // Get canvas position
    const x = e.clientX - rect.left; // Adjust mouse position relative to the canvas
    const y = e.clientY - rect.top;

    setStrokes((prev) => [...prev, [[x, y, e.pressure || 0.5]]]);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) return; // Only draw if the mouse is held down

    const rect = canvasRef.current.getBoundingClientRect(); // Get canvas position
    const x = e.clientX - rect.left; // Adjust mouse position relative to the canvas
    const y = e.clientY - rect.top;

    setStrokes((prev) => {
      const newStrokes = [...prev];
      newStrokes[newStrokes.length - 1] = [
        ...newStrokes[newStrokes.length - 1],
        [x, y, e.pressure || 0.5],
      ];
      return newStrokes;
    });
  };

  const handlePointerUp = () => {
    isDrawing.current = false; // Stop drawing when the mouse is released
  };

  return (
    <svg
      ref={canvasRef} // Attach the canvas reference
      width="100vw"
      height="100vh"
      style={{
        border: "1px solid black",
        touchAction: "none",
        position: "absolute",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {strokes.map((stroke, i) => {
        const pathData = getStroke(stroke, { size: 4, smoothing: 0.4 })
          .map(([x, y]) => `${x},${y}`)
          .join(" ");
        return (
          <polyline
            key={i}
            points={pathData}
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
};

export default DrawingCanvas;
