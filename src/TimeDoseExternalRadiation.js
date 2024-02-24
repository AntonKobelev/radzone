import React from "react";

const TimeDoseExternalRadiation = ({ onSetTimeDoseExternalRadiation }) => {
  return (
    <div className="selector">
      <h2>Время дозы внешней радиации:</h2>
      <select
        id="timeDoseExternalRadiationSelect"
        onChange={(e) => onSetTimeDoseExternalRadiation(e.target.value)}
      >
        <option value="1h">1ч</option>
        <option value="3h">3ч</option>
        <option value="6h">6ч</option>
        <option value="12h">12ч</option>
        <option value="24h">24ч</option>
        <option value="2d">2сут</option>
        <option value="5d">5сут</option>
        <option value="10d">10сут</option>
        <option value="30d">30сут</option>
        <option value="2m">2мес</option>
        <option value="3m">3мес</option>
        <option value="12m">12мес</option>
      </select>
    </div>
  );
};

export default React.memo(TimeDoseExternalRadiation);
