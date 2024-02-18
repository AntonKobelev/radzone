import { useEffect } from "react";
import getAtmosphericCondition from "./getAtmosphericCondition";

const Result = ({
  speedOfWind,
  cloudCover,
  timeOfDay,
  isSnow,
  onSetAthmosphericVerticalStability,
}) => {
  useEffect(() => {
    const condition = getAtmosphericCondition(
      speedOfWind,
      cloudCover,
      timeOfDay,
      isSnow
    );
    onSetAthmosphericVerticalStability(condition);
  }, [
    speedOfWind,
    cloudCover,
    timeOfDay,
    isSnow,
    onSetAthmosphericVerticalStability,
  ]); // Добавляем все зависимости);

  return (
    <div>
      <p>Результат расчёта</p>
      <p></p>
    </div>
  );
};

export default Result;
