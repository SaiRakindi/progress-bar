import { useEffect, useState } from "react";
import { MAX, MIN } from "../constant";

const ProgressBar = ({ value = MIN }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  return (
    <div className="progress-bar">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        style={{ width: `${percent}%` }}
        role="progress bar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
      ></div>
    </div>
  );
};

export default ProgressBar;
