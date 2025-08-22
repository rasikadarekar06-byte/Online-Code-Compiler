
import React, { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("<h1>Hello World</h1>");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div className="App">
      <h1>CodeCollab</h1>
      <h3>Online Code Compiler - HTML Only</h3>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="80"
        style={{ fontFamily: "monospace", padding: "10px" }}
      />
      <br />
      <button onClick={runCode}>Run</button>
      <h2>Output:</h2>
      <iframe
        title="output"
        srcDoc={output}
        style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
}

export default App;
