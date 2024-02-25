// Функция для получения типов реакторов по названию АЭС

export default function getCoordinatesByName(name, nuclearPowerPlants) {
  const station = nuclearPowerPlants.find((plant) => plant.name === name);
  return station ? station.coordinates : null; // Возвращает null, если АЭС не найдена
}
