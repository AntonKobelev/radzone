import React from "react";

const CloudCover = ({ onSetCloudCover }) => {
  return (
    <div className="selector">
      <h2>Облачность:</h2>
      <select
        id="cloudCoverSelect"
        onChange={(e) => onSetCloudCover(e.target.value)}
      >
        <option value="clear">Ясно</option>
        <option value="variable">Переменная</option>
        <option value="overcast">Сплошная</option>
      </select>
    </div>
  );
};

export default React.memo(CloudCover);
