import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  async function fetchInfo() {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    setResult(json);
  }
  return (
    <div>
      <button onClick={fetchInfo}>fetch data from api</button>
      <div>result: {result}</div>
    </div>
  );
}
