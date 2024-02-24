import React from "react";

const SpeedOfWindForAtmosphericCondition = ({
  onSetSpeedOfWindForAtmosphericCondition,
}) => {
  return (
    <div className="selector">
      <h2>Скорость ветра:</h2>
      <select
        id="speedOfWindSelect"
        onChange={(e) =>
          onSetSpeedOfWindForAtmosphericCondition(e.target.value)
        }
      >
        <option value="lessThan2">Менее 2</option>
        <option value="from2To4">2-4</option>
        <option value="moreThan4">Более 4</option>
      </select>
    </div>
  );
};

export default React.memo(SpeedOfWindForAtmosphericCondition);
