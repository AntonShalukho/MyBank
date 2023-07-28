import "@testing-library/jest-dom";

import { CurrencyMockData } from "../moke/CurrencyMockData";

test("Get snapshot Accounts CurrencyMockData", () => {
  expect(CurrencyMockData).toMatchSnapshot();
});
