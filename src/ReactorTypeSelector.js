import React from "react";

const ReactorTypeSelector = ({ onSetTypeReactor }) => {
  return (
    <div className="selector">
      <h2>Тип энергетического блока:</h2>
      <select
        id="reactorTypeSelect"
        onChange={(e) => onSetTypeReactor(e.target.value)}
      >
        <option value="РБМК-1000">РБМК-1000</option>
        <option value="ВВЭР-1000">ВВЭР-1000</option>
        <option value="ВВЭР-440">ВВЭР-440</option>
      </select>
    </div>
  );
};

export default React.memo(ReactorTypeSelector);
