import React, { useState } from "react";
import { Button } from "~/components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_SAMPLE_ENV_KEY);

  // define
  // console.log(ENV_SAMPLE_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <Button variant="primary">Buttonだよ</Button>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
