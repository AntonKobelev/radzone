import React from "react";

const NuclearPowerPlantsNameSelector = ({ onSetNuclearPowerPlantsName }) => {
  return (
    <div className="selector">
      <h2>Название атомной станции:</h2>
      <select
        id="nuclearPowerPlantsNameSelect"
        onChange={(e) => onSetNuclearPowerPlantsName(e.target.value)}
      >
        <option value="Балаковская АЭС">Балаковская АЭС</option>
        <option value="Калининская АЭС">Калининская АЭС</option>
        <option value="Курская АЭС">Курская АЭС</option>
        <option value="Кольская АЭС">Кольская АЭС</option>
        <option value="Нововоронежская АЭС">Нововоронежская АЭС</option>
        <option value="Ростовская АЭС">Ростовская АЭС</option>
        <option value="Ленинградская АЭС">Ленинградская АЭС</option>
        <option value="Смоленская АЭС">Смоленская АЭС</option>
      </select>
    </div>
  );
};

export default React.memo(NuclearPowerPlantsNameSelector);
