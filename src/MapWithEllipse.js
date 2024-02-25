import getCoordinatesByName from "./getCoordinatesByName";
import { nuclearPowerPlants } from "./nuclearPowerPlants";

import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Fill, Stroke } from "ol/style";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import Polygon from "ol/geom/Polygon";
import { get as getProjection } from "ol/proj";
import { transform } from "ol/proj";

// Функция для создания координат эллипса
function createEllipse(center, radiusX, radiusY, map) {
  const points = 100;
  const coords = [];
  const angleStep = (Math.PI * 2) / points;

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    const dx = radiusX * Math.cos(angle);
    const dy = radiusY * Math.sin(angle);
    const point = [
      center[0] + dx / 111319.5,
      center[1] + dy / (111319.5 * Math.cos((Math.PI * center[0]) / 180)),
    ];
    coords.push(transform(point, "EPSG:4326", map.getView().getProjection()));
  }
  coords.push(coords[0]); // Замыкание полигона

  return coords;
}

const MapWithEllipse = ({
  contaminationZoneLength,
  contaminationZoneWidth,
  nuclearPowerPlantsName,
}) => {
  const mapRef = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 12,
      }),
    });

    setMap(initialMap);

    return () => initialMap.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map) return;

    const center = getCoordinatesByName(
      nuclearPowerPlantsName,
      nuclearPowerPlants
    );
    console.log(center); // Должен выводить массив с двумя числовыми значениями
    const ellipseCoords = createEllipse(
      center,
      contaminationZoneLength * 1000,
      contaminationZoneWidth * 1000,
      map
    );

    const ellipseFeature = new Feature(new Polygon([ellipseCoords]));
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [ellipseFeature],
      }),
      style: new Style({
        stroke: new Stroke({
          color: "red",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(255, 0, 0, 0.2)",
        }),
      }),
    });

    map.addLayer(vectorLayer);
    map.getView().setCenter(fromLonLat(center));

    return () => map.removeLayer(vectorLayer);
  }, [
    map,
    nuclearPowerPlantsName,
    contaminationZoneLength,
    contaminationZoneWidth,
  ]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapWithEllipse;
