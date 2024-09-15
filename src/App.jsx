import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="progress-app">
      <h6>Progress Bar</h6>
      <ProgressBar value={23} />
    </div>
  );
}

export default App;
