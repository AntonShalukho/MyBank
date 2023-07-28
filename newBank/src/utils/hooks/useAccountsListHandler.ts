import { useDispatch, useSelector } from "react-redux";
import { setIsEmptyAccountsList } from "redux/actions/isEmptyAccountsListAction";

import { accountsListSelector } from "redux/selectors/accoutsListSelector";

export const useAccountsListHandler = () => {
  const dispatch = useDispatch();
  const isEmptyList = useSelector(accountsListSelector);

  const setIsEmptyList = (isEmptyAccountsList: boolean) =>
    dispatch(setIsEmptyAccountsList(isEmptyAccountsList));

  return { isEmptyList, setIsEmptyList };
};
