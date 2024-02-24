import React from "react";

const SpeedOfWindForDeterminingContaminationZoneLength = ({
  onSetSpeedOfWindForDeterminingContaminationZoneLength,
}) => {
  return (
    <div className="selector">
      <h2>Скорость ветра:</h2>
      <select
        id="speedOfWindSelect"
        onChange={(e) =>
          onSetSpeedOfWindForDeterminingContaminationZoneLength(e.target.value)
        }
      >
        <option value="<=2">{"<=2"}</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default React.memo(SpeedOfWindForDeterminingContaminationZoneLength);
