import React from "react";

const WindDirection = ({ onSetWindDirection, windDirection }) => {
  return (
    <div className="selector">
      <h2>Направление ветра(C°): </h2>
      <input
        type="number"
        min="0"
        max="360"
        value={windDirection}
        onChange={onSetWindDirection}
        className="inputWindDirection"
      />

      <span></span>
    </div>
  );
};

export default React.memo(WindDirection);
