// @ts-nocheck

import React, { useState, useEffect } from "react";

import { LatLng } from "leaflet";

import { useMap, Marker } from "react-leaflet";

import * as ELG from "esri-leaflet-geocoder";

import { LocationDot } from "../mapIcons";

import { useTypedDispatch } from "../../../redux/store/store";

import { setCityBanksInfo } from "../../../redux/actions/mapActions";

import { setUserCity } from "../../../redux/actions/userActions";

import { DEFAULT_PADDING, ESRI_GEOCODER_API_KEY } from "../constants";

export const Locator = () => {
  const dispatch = useTypedDispatch();
  const [position, setPosition] = useState<LatLng | null>(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", (event) => {
      setPosition(event.latlng);

      ELG.reverseGeocode({
        apikey: ESRI_GEOCODER_API_KEY,
      })
        .latlng(event.latlng)
        .language("en")
        .run((err, results, response) => {
          dispatch(
            setCityBanksInfo(
              `${results.address.City}, ${results.address.CntryName}`
            )
          );
          dispatch(
            setUserCity(`${results.address.City}, ${results.address.CntryName}`)
          );
        });
    });
    map.fitBounds(map.getBounds(), { paddingTopLeft: [DEFAULT_PADDING, 0] });
  }, [map, dispatch]);

  return position && <Marker position={position} icon={LocationDot} />;
};
