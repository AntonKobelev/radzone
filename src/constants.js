// Значение коэффициента а для различных категорий вертикальной устойчивости атмосферы
const coefficientA = {
  convection: 0.2,
  isothermy: 0.06,
  inversion: 0.03,
};

// Длина зон радиоактивного загрязнения местности при разрушении ЯЭР РБМК-1000, км, конвекция, скорость ветра U0 < 2 м/с
const rbmk1000ConvectionZoneLengthKmWindU0LessThan2 = [
  {
    dose: 0.5,
    1: 8,
    3: 19,
    6: 31,
    12: 50,
    24: 80,
    48: 122,
    120: 185,
    240: null,
    720: null,
    2160: null,
  },
  {
    dose: 1,
    1: 7,
    3: 14,
    6: 25,
    12: 37,
    24: 55,
    48: 85,
    120: 120,
    240: 160,
    720: 270,
    2160: null,
  },
  {
    dose: 5,
    1: 4,
    3: 8,
    6: 11,
    12: 15,
    24: 20,
    48: 30,
    120: 45,
    240: 55,
    720: 90,
    2160: 110,
  },
  {
    dose: 10,
    1: 3,
    3: 6,
    6: 8,
    12: 10,
    24: 13,
    48: 18,
    120: 26,
    240: 32,
    720: 50,
    2160: 62,
  },
  {
    dose: 25,
    1: null,
    3: 3,
    6: 4,
    12: 6,
    24: 7,
    48: 10,
    120: 13,
    240: 16,
    720: 24,
    2160: 30,
  },
  {
    dose: 50,
    1: null,
    3: null,
    6: 3,
    12: 4,
    24: 5,
    48: 6,
    120: 8,
    240: 10,
    720: 14,
    2160: 18,
  },
  {
    dose: 75,
    1: null,
    3: null,
    6: null,
    12: 3,
    24: 4,
    48: 5,
    120: 6,
    240: 7,
    720: 9,
    2160: 10,
  },
  {
    dose: 100,
    1: null,
    3: null,
    6: null,
    12: null,
    24: 3,
    48: 4,
    120: 5,
    240: 6,
    720: 8,
    2160: 10,
  },
  {
    dose: 200,
    1: null,
    3: null,
    6: null,
    12: null,
    24: null,
    48: 3,
    120: 4,
    240: 5,
    720: 6,
    2160: 9,
  },
  {
    dose: 300,
    1: null,
    3: null,
    6: null,
    12: null,
    24: null,
    48: null,
    120: 3,
    240: 4,
    720: 4.5,
    2160: 5,
  },
  {
    dose: 500,
    1: null,
    3: null,
    6: null,
    12: null,
    24: null,
    48: null,
    120: 3,
    240: 4,
    720: null,
    2160: 7,
  },
];

// Константа для определения степени вертикальной устойчивости атмосферы (при отсутствии снежного покрова)
const atmosphericStabilityWithoutSnow = {
  night: {
    clear: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Inversion",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
  },
  morning: {
    clear: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
  },
  day: {
    clear: {
      lessThan2: "Convection",
      from2To4: "Convection",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Convection",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
  },
  evening: {
    clear: {
      lessThan2: "Inversion",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Inversion",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
  },
};

// Константа для определения степени вертикальной устойчивости атмосферы (при наличии снежного покрова)
const atmosphericStabilityWithSnow = {
  night: {
    clear: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
  },
  morning: {
    clear: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
  },
  day: {
    clear: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Isothermy",
      from2To4: "Isothermy",
      moreThan4: "Isothermy",
    },
  },
  evening: {
    clear: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    variable: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
    overcast: {
      lessThan2: "Inversion",
      from2To4: "Inversion",
      moreThan4: "Isothermy",
    },
  },
};

export const CONSTANTS = {
  coefficientA,
  rbmk1000ConvectionZoneLengthKmWindU0LessThan2,
  atmosphericStabilityWithoutSnow,
  atmosphericStabilityWithSnow,
};
