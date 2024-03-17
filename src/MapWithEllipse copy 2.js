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
import { Style, Fill, Stroke, Icon } from "ol/style";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import Polygon from "ol/geom/Polygon";
import { get as getProjection } from "ol/proj";
import { transform } from "ol/proj";
import { Point } from "ol/geom";
import nuclearPowerPlantIcon from "./assets/radIcon.png";
import * as turf from "@turf/turf";

// Функция для создания координат эллипса
function createEllipse(center, radiusX, radiusY, windDirection, map) {
  // Создаем эллипс с помощью Turf.js
  const options = { steps: 200, units: "kilometers", angle: windDirection };
  const ellipse = turf.ellipse(center, radiusX / 1000, radiusY / 1000, options);

  // Получаем координаты эллипса
  const coords = ellipse.geometry.coordinates;
  console.log(coords);

  // Преобразуем координаты для использования в OpenLayers
  const transformedCoords = coords[0].map((coord) =>
    transform(coord, "EPSG:4326", map.getView().getProjection())
  );

  return transformedCoords;
}

const MapWithEllipse = ({
  contaminationZoneLength,
  contaminationZoneWidth,
  nuclearPowerPlantsName,
  windDirection,
}) => {
  console.log("contaminationZoneWidth", contaminationZoneWidth);
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
    console.log(contaminationZoneLength);
    console.log(contaminationZoneWidth);

    // Здесь убедитесь, что windDirection преобразуется в число, если он передается как строка
    const windDirectionValue =
      typeof windDirection === "string"
        ? parseFloat(windDirection)
        : windDirection;

    const ellipseCoords = createEllipse(
      center,
      contaminationZoneLength * 1000,
      contaminationZoneWidth * 1000,
      windDirectionValue,
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

    // Создаем Feature с типом Point для центра эллипса
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(center)),
    });

    // Определяем стиль для иконки
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5], // Якорь в центре изображения
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        scale: 0.05, // Масштабируем иконку, если необходимо
        src: nuclearPowerPlantIcon, // URL вашего изображения
      }),
    });

    // Применяем стиль к Feature
    iconFeature.setStyle(iconStyle);

    // Добавляем Feature с иконкой в исходный векторный слой
    vectorLayer.getSource().addFeature(iconFeature);

    map.addLayer(vectorLayer);
    map.getView().setCenter(fromLonLat(center));

    return () => map.removeLayer(vectorLayer);
  }, [
    map,
    nuclearPowerPlantsName,
    contaminationZoneLength,
    contaminationZoneWidth,
    windDirection,
  ]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapWithEllipse;
