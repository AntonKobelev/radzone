import { useEffect, useState } from "react";
import Header from "./Header";
import ReactorTypeSelector from "./ReactorTypeSelector";
import CloudCover from "./CloudCover";
import TimeOfDay from "./TimeOfDay";
import Result from "./Result";
import TimeDoseExternalRadiation from "./TimeDoseExternalRadiation";
import DoseValue from "./DoseValue";
import Title from "./Title";
import getAtmosphericCondition from "./getAtmosphericCondition";
import getContaminationZoneLength from "./getContaminationZoneLength";
import { CONSTANTS } from "./constants";
import SpeedOfWindForAtmosphericCondition from "./SpeedOfWindForAtmosphericCondition";
import SpeedOfWindForDeterminingContaminationZoneLength from "./SpeedOfWindForDeterminingContaminationZoneLength";
import getNeedTable from "./getNeedTable";
const { coefficientA } = CONSTANTS;

function App() {
  const [typeReactor, setTypeReactor] = useState("РБМК-1000");
  const [
    speedOfWindForAtmosphericCondition,
    setSpeedOfWindForAtmosphericCondition,
  ] = useState("lessThan2");
  const [
    speedOfWindForDeterminingContaminationZoneLength,
    setSpeedOfWindForDeterminingContaminationZoneLength,
  ] = useState("<=2");
  const [cloudCover, setCloudCover] = useState("clear");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [atmosphericVerticalStability, setAtmosphericVerticalStability] =
    useState("Конвекция");
  const [timeDoseExternalRadiation, setTimeDoseExternalRadiation] =
    useState("1h");
  const [doseValue, setDoseValue] = useState(0.5);
  const [contaminationZoneLength, setContaminationZoneLength] = useState(0);
  const [contaminationZoneWidth, setContaminationZoneWidth] = useState(0);
  const [areaOfContaminatedZone, setAreaOfContaminatedZone] = useState(0);

  useEffect(() => {
    setAreaOfContaminatedZone(
      (contaminationZoneLength * contaminationZoneWidth).toFixed(1)
    );
  }, [contaminationZoneLength, contaminationZoneWidth]);

  useEffect(() => {
    setContaminationZoneWidth(
      (
        contaminationZoneLength * coefficientA[atmosphericVerticalStability]
      ).toFixed(1)
    );
  }, [contaminationZoneLength, atmosphericVerticalStability]);

  useEffect(() => {
    const condition = getAtmosphericCondition(
      speedOfWindForAtmosphericCondition,
      cloudCover,
      timeOfDay
    );
    setAtmosphericVerticalStability(condition);
  }, [speedOfWindForAtmosphericCondition, cloudCover, timeOfDay]); // Добавляем все зависимости);

  useEffect(() => {
    const contaminationZoneLength = getContaminationZoneLength(
      getNeedTable(
        typeReactor,
        speedOfWindForDeterminingContaminationZoneLength,
        atmosphericVerticalStability
      ),
      doseValue,
      timeDoseExternalRadiation
    );
    setContaminationZoneLength(
      Number(
        typeReactor === "ВВЭР-440"
          ? contaminationZoneLength * 0.663
          : contaminationZoneLength
      ).toFixed(1)
    );
  }, [
    typeReactor,
    doseValue,
    timeDoseExternalRadiation,
    speedOfWindForDeterminingContaminationZoneLength,
    atmosphericVerticalStability,
  ]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title>
          Расчет степени вертикальной устойчивости атмосферы <br /> (при
          отсутствии снежного покрова)
        </Title>
        <div className="selectorBox">
          <SpeedOfWindForAtmosphericCondition
            onSetSpeedOfWindForAtmosphericCondition={
              setSpeedOfWindForAtmosphericCondition
            }
          />
          <CloudCover onSetCloudCover={setCloudCover} />
          <TimeOfDay onSetTimeOfDay={setTimeOfDay} />
        </div>
        <Result>
          Тип вертикальной устойчивости атмосферы:{" "}
          {atmosphericVerticalStability}
        </Result>
      </div>

      <div className="container">
        <div className="selectorBox twoColumns">
          <ReactorTypeSelector onSetTypeReactor={setTypeReactor} />
          <SpeedOfWindForDeterminingContaminationZoneLength
            onSetSpeedOfWindForDeterminingContaminationZoneLength={
              setSpeedOfWindForDeterminingContaminationZoneLength
            }
          />
          <DoseValue onSetDoseValue={setDoseValue} />
          <TimeDoseExternalRadiation
            onSetTimeDoseExternalRadiation={setTimeDoseExternalRadiation}
          />
        </div>
        <Result>
          Длина зоны радиоактивного загрязнения местности (Lx):{" "}
          {contaminationZoneLength} км <br />
          Ширина зоны радиоактивного загрязнения местности (Ly):{" "}
          {contaminationZoneWidth} км <br />
          Плошадь зоны радиоактивного загрязнения местности :{" "}
          {areaOfContaminatedZone} км<sup>2</sup>
          <br />
        </Result>
      </div>
    </div>
  );
}

export default App;
