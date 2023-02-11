// @ts-nocheck

import React, { memo } from "react";

import L from "leaflet";

import { useMap } from "react-leaflet";

type TileLayerProps = {
  locale: string;
};

export const TileLayer = memo(({ locale }: TileLayerProps) => {
  const map = useMap();

  const tileLayers = {
    "de-de": L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }),
    "en-us": L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ),
  };

  map.addLayer(tileLayers[locale]);

  return null;
});
