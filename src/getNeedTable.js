import { CONSTANTS } from "./constants";

const {
  rbmk1000ConvectionZoneLengthKmWindU0LessThan2,
  rbmk1000ConvectionZoneLengthKmWindU03,
  rbmk1000ConvectionZoneLengthKmWindU05,
  rbmk1000IsothermiaZoneLengthKmWindU0LessThan2,
  rbmk1000IsothermiaZoneLengthKmWindU05,
  rbmk1000IsothermiaZoneLengthKmWindU07,
  rbmk1000IsothermiaZoneLengthKmWindU010,
  rbmk1000InversionZoneLengthKmWindU0LessThan2,
  rbmk1000InversionZoneLengthKmWindU03,
  rbmk1000InversionZoneLengthKmWindU04,
  vver1000ConvectionZoneLengthKmWindU0LessThan2,
  vver1000ConvectionZoneLengthKmWindU03,
  vver1000ConvectionZoneLengthKmWindU05,
  vver1000IsothermiaZoneLengthKmWindU0LessThan2,
  vver1000IsothermiZoneLengthKmWindU05,
  vver1000IsothermiaZoneLengthKmWindU07,
  vver1000IsothermiaZoneLengthKmWindU010,
  vver1000InversionZoneLengthKmWindU0LessThan2,
  vver1000InversionZoneLengthKmWindU03,
  vver1000InversionZoneLengthKmWindU04,
} = CONSTANTS;

export default function getNeedTable(
  typeReactor,
  speedOfWindForDeterminingContaminationZoneLength,
  atmosphericVerticalStability
) {
  if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return rbmk1000ConvectionZoneLengthKmWindU0LessThan2;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "3" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return rbmk1000ConvectionZoneLengthKmWindU03;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "5" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return rbmk1000ConvectionZoneLengthKmWindU05;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return rbmk1000IsothermiaZoneLengthKmWindU0LessThan2;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "5" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return rbmk1000IsothermiaZoneLengthKmWindU05;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "7" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return rbmk1000IsothermiaZoneLengthKmWindU07;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "10" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return rbmk1000IsothermiaZoneLengthKmWindU010;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return rbmk1000InversionZoneLengthKmWindU0LessThan2;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "3" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return rbmk1000InversionZoneLengthKmWindU03;
  } else if (
    typeReactor === "РБМК-1000" &&
    speedOfWindForDeterminingContaminationZoneLength === "4" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return rbmk1000InversionZoneLengthKmWindU04;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return vver1000ConvectionZoneLengthKmWindU0LessThan2;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "3" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return vver1000ConvectionZoneLengthKmWindU03;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "5" &&
    atmosphericVerticalStability === "Конвекция"
  ) {
    return vver1000ConvectionZoneLengthKmWindU05;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return vver1000IsothermiaZoneLengthKmWindU0LessThan2;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "5" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return vver1000IsothermiZoneLengthKmWindU05;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "7" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return vver1000IsothermiaZoneLengthKmWindU07;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "10" &&
    atmosphericVerticalStability === "Изотермия"
  ) {
    return vver1000IsothermiaZoneLengthKmWindU010;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "<=2" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return vver1000InversionZoneLengthKmWindU0LessThan2;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "3" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return vver1000InversionZoneLengthKmWindU03;
  } else if (
    (typeReactor === "ВВЭР-1000" || typeReactor === "ВВЭР-440") &&
    speedOfWindForDeterminingContaminationZoneLength === "4" &&
    atmosphericVerticalStability === "Инверсия"
  ) {
    return vver1000InversionZoneLengthKmWindU04;
  } else {
    console.log("Таблицы отсутствуют");
    return null;
  }
}
