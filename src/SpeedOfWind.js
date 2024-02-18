const SpeedOfWind = ({ onSetSpeedOfWind }) => {
  return (
    <div className="selector">
      <h2>Скорость ветра:</h2>
      <select
        id="speedOfWindSelect"
        onChange={(e) => onSetSpeedOfWind(e.target.value)}
      >
        <option value="lessThan2">Менее 2</option>
        <option value="between2And4">2-4</option>
        <option value="moreThan4">Более 4</option>
      </select>
    </div>
  );
};

export default SpeedOfWind;
