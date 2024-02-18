const IsSnow = ({ onSetIsSnow }) => {
  return (
    <div className="selector">
      <h2>Наличие снежного покрова:</h2>
      <select id="isSnowSelect" onChange={(e) => onSetIsSnow(e.target.value)}>
        <option value={false}>Отсутствует</option>
        <option value={true}>Имеется</option>
      </select>
    </div>
  );
};

export default IsSnow;
