import React, { ChangeEvent, memo } from "react";

import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import classNames from "classnames";

import {
  resetSearch,
  setCitiesData,
  setCityBanksInfo,
  setCurrentCity,
  setSearchInput,
} from "../../../redux/actions/mapActions";

import { useTypedDispatch } from "../../../redux/store/store";

import {
  selectCityNames,
  selectSearchInput,
} from "../../../redux/selectors/mapSelectors";

import { ClearInputIcon, Search } from "../../../components_v2/Icon";

import { useDebounce } from "../../../utils/hooks/useDebounce";

import { Selection } from "../../../components_v2/Selection/Selection";

import { setCityToLocalStorage } from "../../../utils/normalizeBranchDataHelpers";

import { capitalize } from "../../../utils/capitalize";

import "./CityInputWithSelectionStyles.css";

type CityInputWithSelectionProps = {
  placeholderTextId?: string;
  onSelect?: () => void;
};

export const CityInputWithSelection = memo(
  ({ placeholderTextId, onSelect }: CityInputWithSelectionProps) => {
    const searchInput = useSelector(selectSearchInput);
    const selectionCities = useSelector(selectCityNames);
    const dispatch = useTypedDispatch();
    const debouncedDispatch = useDebounce(dispatch, 500);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchInput(e.currentTarget.value));
      debouncedDispatch(setCitiesData(e.currentTarget.value));
    };

    const handleReset = () => {
      dispatch(setSearchInput(""));
      dispatch(resetSearch());
    };

    const onSearchInputChange = (city: string) => {
      dispatch(setCitiesData(city));
      dispatch(setCityBanksInfo(city.split(",")[0]));
      dispatch(setSearchInput(city));
      dispatch(setCurrentCity(capitalize(city)));
      setCityToLocalStorage(city);
      onSelect && onSelect();
      dispatch(resetSearch());
    };

    const selectHandler = (id: number) => {
      const city = selectionCities![id].value;
      onSearchInputChange(city);
    };

    const enterPressHandler = (city: string) => {
      onSearchInputChange(city);
    };

    return (
      <>
        <Search />
        <Selection
          className={classNames({
            unstyled: !selectionCities?.length,
          })}
          selections={
            selectionCities && !selectionCities.length
              ? [
                  {
                    id: -1,
                    // @ts-expect-error
                    value: (<FormattedMessage id="notFound" />) as string,
                    iconName: "openNow",
                  },
                ]
              : selectionCities
          }
          value={searchInput}
          placeholderTextId={placeholderTextId!}
          selectHandler={selectHandler}
          changeHandler={changeHandler}
          enterPressHandler={enterPressHandler}
        />
        {searchInput && <ClearInputIcon onClick={handleReset} />}
      </>
    );
  }
);
