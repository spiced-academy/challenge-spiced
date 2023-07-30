import React from "react";
import "./styles.css";

export default function App() {
  return <Button text="hello" color="red" />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled}>
      {" "}
      {text}{" "}
    </button>
  );
}
