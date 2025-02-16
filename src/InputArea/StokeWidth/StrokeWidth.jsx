/* eslint-disable react/prop-types */
function StrokeWidth({ strokeSize, setStrokeSize }) {
  function changeStrokeWidth(e) {
    setStrokeSize(e.target.value);
    console.log(strokeSize);
  }

  return (
    <>
      <input
        type="range"
        id="width"
        name="Stroke Width"
        min="2"
        max="16"
        onChange={changeStrokeWidth}
      />
    </>
  );
}

export default StrokeWidth;
