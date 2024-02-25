// Функция для получения типов реакторов по названию АЭС

export default function getReactorsByName(name, nuclearPowerPlants) {
  const station = nuclearPowerPlants.find((plant) => plant.name === name);
  return station ? station.reactors : null; // Возвращает null, если АЭС не найдена
}
