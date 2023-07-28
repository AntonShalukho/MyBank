// @ts-nocheck

import React, { memo } from "react";

import * as ELG from "esri-leaflet-geocoder";

import { useMap } from "react-leaflet";

import { useTypedDispatch } from "../../../redux/store/store";

import { useDebounce } from "../../../utils/hooks/useDebounce";

import {
  ESRI_GEOCODER_API_KEY,
  DEFAULT_MAP_ZOOM,
  DEFAULT_PADDING,
} from "../constants";
import { setCurrentBounds } from "../../../redux/actions/mapActions";

export const Geocoder = memo(({ address }: { address: string | null }) => {
  const map = useMap();
  const dispatch = useTypedDispatch();
  const boundsChangeHandler = () => {
    dispatch(setCurrentBounds(map.getBounds()));
  };
  const debouncedHandler = useDebounce(boundsChangeHandler, 300);

  map.on("resize", debouncedHandler);
  map.on("move", debouncedHandler);
  address &&
    ELG.geocode({
      apikey: ESRI_GEOCODER_API_KEY,
    })
      .text(address)
      .run((err, results, response) => {
        const { lat, lng } = results.results[0].latlng;
        map
          .setView([lat, lng], DEFAULT_MAP_ZOOM)
          .fitBounds(map.getBounds(), { paddingTopLeft: [DEFAULT_PADDING, 0] });
      });

  return null;
});
