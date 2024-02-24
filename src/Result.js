import { useEffect } from "react";

const Result = ({ children }) => {
  return (
    <div>
      <h3>Результат расчёта:</h3>
      <h3>{children}</h3>
      {/* <p>
        {!isNaN(сontaminationZoneLength)
          ? `Длина зоны загрязнения (Lx): ${сontaminationZoneLength}  км`
          : сontaminationZoneLength}
      </p> */}
    </div>
  );
};

export default Result;
