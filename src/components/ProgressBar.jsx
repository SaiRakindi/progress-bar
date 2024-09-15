import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress-bar">
      <span>{percent.toFixed()}%</span>
      <div></div>
    </div>
  );
};

export default ProgressBar;
