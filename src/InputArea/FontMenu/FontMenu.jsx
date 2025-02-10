import "./FontMenu.css";
import { useState } from "react";

function FontMenu({ setFontName }) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSelectedOption(value);
    setFontName(value);
    console.log(value);
  }

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="dropdown"
      >
        <option value="" disabled>
          Fonts
        </option>
        <option value="NeueMantana">NeueMantana</option>
        <option value="GillSans">GillSans</option>
        <option value="DxGlitar">DxGlitar</option>
        <option value="Harmond">Harmond</option>
        <option value="Fraunces">Fraunces</option>
        <option value="Obrazec">Obrazec</option>
      </select>
    </div>
  );
}

export default FontMenu;
