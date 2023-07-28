import { useDispatch, useSelector } from "react-redux";

import { advertisementAction } from "src/shared/model/redux/actions/advertisement";

import { selectAdvertisement } from "src/shared/model/redux/selectors/advertisementSelector";

import { AdvertisementProductsType } from "src/shared/types/advertisement";

export const useAdvertisement = () => {
  const advertisements = useSelector(selectAdvertisement);
  const dispatch = useDispatch();

  const setAdvertisement = (advertisements: AdvertisementProductsType[]) =>
    dispatch(advertisementAction(advertisements));

  return { advertisements, setAdvertisement };
};
