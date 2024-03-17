export default function getNewLatitude(latitude, radius) {
  // Переводим радиус из километров в градусы
  const radiusInDegrees = radius / 111;

  // Вычисляем новую широту, сдвигая исходную вниз (юг) на заданный радиус
  const newLatitude = latitude - radiusInDegrees;

  return newLatitude;
}
