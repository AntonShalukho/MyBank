import React, { useEffect, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { MapContainer, Marker, ZoomControl } from "react-leaflet";

import { LatLngExpression } from "leaflet";

import { Modal } from "../../components/Modal";

import { TileLayer } from "./TileLayer";

import { Popup } from "../../components/Popup";

import { Geocoder } from "./Geocoder";

import { Locator } from "./Locator";

import { BanksList } from "./BanksList";

import { BanksNotFoundMessage } from "./BanksNotFoundMessage";

import { MapInfo } from "./MapInfo";

import { CityInputWithSelection } from "./CityInputWithSelection";

import { iconsMap, iconsMapActive } from "./mapIcons";

import { useTypedDispatch } from "../../redux/store/store";

import {
  selectActiveBranch,
  selectCurrentCity,
  selectFilteredBanksWithCoordinates,
} from "../../redux/selectors/mapSelectors";

import { setLocation, setUserCity } from "../../redux/actions/userActions";

import {
  setActiveBranch,
  setCityBanksInfo,
  setCurrentBounds,
  setCurrentCity,
} from "../../redux/actions/mapActions";

import { DEFAULT_MAP_ZOOM, USER_MAP_ZOOM } from "./constants";

import { RegionModalContent } from "./RegionModalContent";

import { RegionPopup } from "../../components/RegionPopup";

import { GeolocationButton } from "./GeolocationButton";

import "./MapPageStyles.css";

export const MapPage = () => {
  const activeBranch = useSelector(selectActiveBranch);
  const [center, setCenter] = useState<LatLngExpression>();
  const [zoom, setZoom] = useState<number>(DEFAULT_MAP_ZOOM);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const city = useSelector(selectCurrentCity);
  const filteredBanksWithCoordinates = useSelector(
    selectFilteredBanksWithCoordinates
  );
  const dispatch = useTypedDispatch();
  const intl = useIntl();

  const [isHiddenPopup, setIsHiddenPopup] = useState(
    false || !!localStorage.getItem("hidePopup")
  );

  const onClose = () => {
    localStorage.setItem("hidePopup", "true");
    setIsHiddenPopup(true);
  };

  const closeRegionModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const DEFAULT_CITY: {
      NAME: string;
      CENTER_COORDS: LatLngExpression;
    } = {
      NAME: "London, United Kingdom",
      CENTER_COORDS: [51.509865, -0.118092],
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
          setZoom(USER_MAP_ZOOM);
          dispatch(
            setLocation([position.coords.latitude, position.coords.longitude])
          );
        },
        () => {
          setCenter(DEFAULT_CITY.CENTER_COORDS);
          dispatch(setCityBanksInfo(DEFAULT_CITY.NAME));
          dispatch(setCurrentCity(DEFAULT_CITY.NAME));
          dispatch(setUserCity(DEFAULT_CITY.NAME));
        }
      );
    } else {
      setCenter(DEFAULT_CITY.CENTER_COORDS);
      dispatch(setCityBanksInfo(DEFAULT_CITY.NAME));
    }
  }, []);

  useEffect(() => {
    dispatch(setActiveBranch(null));
    dispatch(setCurrentBounds(null));
    return () => setZoom(DEFAULT_MAP_ZOOM);
  }, [city]);
  return (
    <>
      <div className="atms-container">
        <CityInputWithSelection placeholderTextId="searchByAddress" />
        <MapInfo setIsModalOpen={setIsModalOpen}>
          {filteredBanksWithCoordinates?.length ? (
            <BanksList banks={filteredBanksWithCoordinates} />
          ) : (
            <BanksNotFoundMessage />
          )}
        </MapInfo>
      </div>
      <div className="maps-page-container">
        <RegionPopup setIsModalOpen={setIsModalOpen} />
        {!isHiddenPopup && (
          <Popup
            buttonContent={<FormattedMessage id="close" />}
            variant="form"
            className="cookie-popup"
            onClose={onClose}
          >
            <FormattedMessage id="cookiePopup" />
          </Popup>
        )}
        {center && (
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            zoomControl={false}
          >
            <TileLayer locale={intl.locale} />
            {filteredBanksWithCoordinates &&
              filteredBanksWithCoordinates.map((office) => (
                <Marker
                  icon={
                    office.id === activeBranch
                      ? iconsMapActive[
                          filteredBanksWithCoordinates.find(
                            (bank) => bank.id === activeBranch
                          )!.officeType
                        ]
                      : iconsMap[office.officeType]
                  }
                  key={office.id}
                  position={[
                    parseFloat(office.latitude),
                    parseFloat(office.longitude),
                  ]}
                  eventHandlers={{
                    click: () => {
                      activeBranch === office.id
                        ? dispatch(setActiveBranch(null))
                        : dispatch(setActiveBranch(office.id));
                    },
                  }}
                />
              ))}
            <Geocoder address={city} />
            <Locator />
            <ZoomControl position="bottomright" />
            <GeolocationButton />
          </MapContainer>
        )}
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
          backdrop={true}
          className="region-modal"
        >
          <RegionModalContent closeRegionModal={closeRegionModal} />
        </Modal>
      )}
    </>
  );
};
