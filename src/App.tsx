import "./App.css";
import React from "react";

const App: React.FC = () => {
  const [hexValue, setHexValue] = React.useState("");
  const [rgbValue, setRgbValue] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("white");

  const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputHex = event.target.value;
    setHexValue(inputHex);

    if (inputHex.length < 7) {
      setRgbValue("");
      setBackgroundColor("white");
    } else if (/^#[0-9A-Fa-f]{6}/.test(inputHex)) {
      const r = parseInt(inputHex.substring(1, 3), 16);
      const g = parseInt(inputHex.substring(3, 5), 16);
      const b = parseInt(inputHex.substring(5, 7), 16);
      setRgbValue(`rgb(${r}, ${g}, ${b})`);
      setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
      if (inputHex.length > 7) {
        setRgbValue("ошибка!");
        setBackgroundColor("rgb(255, 82, 51)");
      }
    } else {
      setRgbValue("ошибка!");
      setBackgroundColor("rgb(255, 82, 51)");
    }
  };

  return (
    <body style={{ background: backgroundColor }}>
      <div className="container">
        <div className="wrapper">
          <input
            className="input_color"
            type="text"
            value={hexValue}
            onChange={handleHexChange}
          />
          <div className="block_rgb">{rgbValue}</div>
        </div>
      </div>
    </body>
  );
};

export default App;
