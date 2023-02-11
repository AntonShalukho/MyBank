import React from "react";

import { useMap } from "react-leaflet";

import { useSelector } from "react-redux";

import { useTypedDispatch } from "../../../redux/store/store";

import {
  setCurrentCity,
  setSearchInput,
} from "../../../redux/actions/mapActions";

import { selectLocation } from "../../../redux/selectors/userSelectors";

import { Button } from "../../../uikit/Button";

import { Geolocation, NoGeolocation } from "../../../components/Icons";

import { DEFAULT_MAP_ZOOM } from "../constants";

import "./GeolocationButtonStyles.css";

export const GeolocationButton = () => {
  const map = useMap();
  const dispatch = useTypedDispatch();
  const userLocation = useSelector(selectLocation);
  const clickHandler = () => {
    dispatch(setSearchInput(""));
    dispatch(setCurrentCity(""));
    map.locate({ setView: true, maxZoom: DEFAULT_MAP_ZOOM });
  };
  return (
    <>
      <Button
        onClick={clickHandler}
        className="geolocation-button"
        disabled={!userLocation}
      >
        {userLocation ? <Geolocation /> : <NoGeolocation />}
      </Button>
    </>
  );
};
