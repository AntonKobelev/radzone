import React from "react";
import { nuclearPowerPlants } from "./nuclearPowerPlants";
import getReactorsByName from "./getReactorsByName";

const ReactorTypeSelector = ({ onSetTypeReactor, nuclearPowerPlantsName }) => {
  const reactorOptions = getReactorsByName(
    nuclearPowerPlantsName,
    nuclearPowerPlants
  );
  return (
    <div className="selector">
      <h3>Тип энергетического блока:</h3>
      {reactorOptions.length > 1 ? (
        <select
          id="reactorTypeSelect"
          onChange={(e) => onSetTypeReactor(e.target.value)}
        >
          {reactorOptions.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      ) : (
        <p>{reactorOptions}</p>
      )}
    </div>
  );
};

export default React.memo(ReactorTypeSelector);
