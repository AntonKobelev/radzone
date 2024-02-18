const TimeOfDay = ({ onSetTimeOfDay }) => {
  return (
    <div className="selector">
      <h2>Время суток:</h2>
      <select
        id="timeOfDaySelect"
        onChange={(e) => onSetTimeOfDay(e.target.value)}
      >
        <option value="morning">Утро</option>
        <option value="day">День</option>
        <option value="evening">Вечер</option>
        <option value="night">Ночь</option>
      </select>
    </div>
  );
};

export default TimeOfDay;
