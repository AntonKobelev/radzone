export default function getContaminationZoneLength(
  zoneDataArray,
  dose,
  duration
) {
  // Найти объект с заданной дозой
  const doseObject = zoneDataArray?.find((item) => item.dose === dose);
  if (!doseObject) {
    console.log("Доза не найдена.");
    return "Доза не найдена";
  }

  // Получить длину зоны загрязнения для заданной продолжительности
  const length = doseObject.duration[duration];
  if (length === undefined || length === null) {
    console.log(
      "Информация о продолжительности не найдена или для этой продолжительности значение не определено."
    );
    return "Информация о продолжительности не найдена или для этой продолжительности значение не определено";
  }

  return length;
}
