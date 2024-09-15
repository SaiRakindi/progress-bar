const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="progress-bar">
      <span>{value.toFixed()}%</span>
      <div></div>
    </div>
  );
};

export default ProgressBar;
