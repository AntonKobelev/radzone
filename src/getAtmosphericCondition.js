import { CONSTANTS } from "./constants";

const { atmosphericStabilityWithoutSnow, atmosphericStabilityWithSnow } =
  CONSTANTS;

export default function getAtmosphericCondition(
  speedOfWind,
  cloudCover,
  timeOfDay,
  isSnow
) {
  // для зимних условий
  if (isSnow) {
    console.log(isSnow);
    return calculateAtmosphericVerticalStability(
      speedOfWind,
      timeOfDay,
      cloudCover,
      atmosphericStabilityWithSnow
    );
  } else {
    return calculateAtmosphericVerticalStability(
      speedOfWind,
      timeOfDay,
      cloudCover,
      atmosphericStabilityWithoutSnow
    );
  }
}

function calculateAtmosphericVerticalStability(
  speedOfWind,
  timeOfDay,
  cloudCover,
  atmosphericStability
) {
  // Проверяем, существует ли время суток и облачность в нашей структуре
  if (
    atmosphericStability[timeOfDay] &&
    atmosphericStability[timeOfDay][cloudCover]
  ) {
    // Возвращаем условие атмосферы на основе скорости ветра, облачности и времени суток
    return (
      atmosphericStability[timeOfDay][cloudCover][speedOfWind] ||
      "Условие не найдено"
    );
  } else {
    return "Время суток или облачность не обнаружены";
  }
}
