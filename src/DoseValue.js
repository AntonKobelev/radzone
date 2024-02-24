import React from "react";

const DoseValue = ({ onSetDoseValue }) => {
  return (
    <div className="selector">
      <h2>Доза (сГр):</h2>
      <select
        id="cloudCoverSelect"
        onChange={(e) => onSetDoseValue(Number(e.target.value))}
      >
        <option value={0.5}>0.5</option>
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={500}>500</option>
      </select>
    </div>
  );
};

export default React.memo(DoseValue);
