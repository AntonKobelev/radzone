import { useState } from "react";
import Header from "./Header";
import { CONSTANTS } from "./constants";
import ReactorTypeSelector from "./ReactorTypeSelector";
import SpeedOfWind from "./SpeedOfWind";
import CloudCover from "./CloudCover";
import TimeOfDay from "./timeOfDay";
import Result from "./Result";
import IsSnow from "./IsSnow";
const {
  coefficientA,
  rbmk1000ConvectionZoneLengthKmWindU0LessThan2,
  atmosphericStabilityWithoutSnow,
} = CONSTANTS;

function App() {
  const [doseValue, setDoseValue] = useState(0.5);
  const [typeReactor, setTypeReactor] = useState("RBMK-1000");
  const [speedOfWind, setSpeedOfWind] = useState("lessThan2");
  const [cloudCover, setCloudCover] = useState("clear");
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [isSnow, setIsSnow] = useState(false);
  const [atmosphericVerticalStability, setAtmosphericVerticalStability] =
    useState("");

  return (
    <div className="App">
      <Header />
      <div className="selectorBox">
        <ReactorTypeSelector onSetTypeReactor={setTypeReactor} />
        <SpeedOfWind onSetSpeedOfWind={setSpeedOfWind} />
        <CloudCover onSetCloudCover={setCloudCover} />
        <TimeOfDay onSetTimeOfDay={setTimeOfDay} />
        <IsSnow onSetIsSnow={setIsSnow} />
      </div>
      <div className="result-container">
        <Result
          speedOfWind={speedOfWind}
          cloudCover={cloudCover}
          timeOfDay={timeOfDay}
          isSnow={isSnow}
          onSetAthmosphericVerticalStability={setAtmosphericVerticalStability}
        />
      </div>
    </div>
  );
}

export default App;
