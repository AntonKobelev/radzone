import { CONSTANTS } from "./constants";

const { atmosphericStabilityWithoutSnow } = CONSTANTS;

export default function getAtmosphericCondition(
  speedOfWind,
  cloudCover,
  timeOfDay
) {
  // Проверяем, существует ли время суток и облачность в нашей структуре
  if (
    atmosphericStabilityWithoutSnow[timeOfDay] &&
    atmosphericStabilityWithoutSnow[timeOfDay][cloudCover]
  ) {
    // Возвращаем условие атмосферы на основе скорости ветра, облачности и времени суток
    return (
      atmosphericStabilityWithoutSnow[timeOfDay][cloudCover][speedOfWind] ||
      "Условие не найдено"
    );
  } else {
    return "Время суток или облачность не обнаружены";
  }
}
