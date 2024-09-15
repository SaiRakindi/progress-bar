import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let interValTime = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(interValTime);
    };
  }, []);

  return (
    <div className="progress-app">
      <h6>Progress Bar</h6>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
