import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-ellipse";
import "leaflet/dist/leaflet.css";
import getCoordinatesByName from "./getCoordinatesByName";
import { nuclearPowerPlants } from "./nuclearPowerPlants";

// Этот компонент добавляет эллипс на карту
const EllipseComponent = ({ center, radii }) => {
  const map = useMap();

  React.useEffect(() => {
    // Перемещаем карту к новому центру
    map.flyTo(center, map.getZoom());
    // Создаем эллипс и добавляем его на карту
    const ellipse = L.ellipse(center, radii, 0, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
    }).addTo(map);

    // Чистим за собой
    return () => {
      ellipse.remove();
    };
  }, [map, center, radii]);

  return null;
};

const MapWithEllipse = ({
  contaminationZoneLength,
  contaminationZoneWidth,
  nuclearPowerPlantsName,
}) => {
  const center = getCoordinatesByName(
    nuclearPowerPlantsName,
    nuclearPowerPlants
  ); // Замените на ваши координаты
  const radii = [
    !isNaN(contaminationZoneLength) ? contaminationZoneLength * 1000 : 0,
    !isNaN(contaminationZoneWidth) ? contaminationZoneWidth * 1000 : 0,
  ]; // Ширина и высота эллипса в метрах

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <EllipseComponent center={center} radii={radii} />
    </MapContainer>
  );
};

export default MapWithEllipse;
