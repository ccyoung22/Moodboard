import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="initialized">App initialized</p>
    </>
  );
}

export default App;
