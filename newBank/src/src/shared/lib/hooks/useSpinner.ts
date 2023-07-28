import { useDispatch, useSelector } from "react-redux";

import { spinnerAction } from "src/shared/model/redux/actions/spinnerAction";

import { selectSpinner } from "src/shared/model/redux/selectors/spinnerSelector";

type ToggleSpinnerType = (payload: boolean) => void;

type UseSpinnerType = () => {
  isLoading: boolean;
  toggleSpinner: ToggleSpinnerType;
};

export const useSpinner: UseSpinnerType = () => {
  const isLoading = useSelector(selectSpinner);
  const dispatch = useDispatch();

  const toggleSpinner: ToggleSpinnerType = (payload) => {
    dispatch(spinnerAction(payload));
  };

  return { isLoading, toggleSpinner };
};
