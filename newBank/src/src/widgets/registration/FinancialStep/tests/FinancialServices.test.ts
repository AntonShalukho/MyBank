import "@testing-library/jest-dom";

import { PASSPORT, POLISH_ID } from "src/shared/consts/Registration";

import { getDateMack } from "utils/dateUtils";

import { InitialValuesType } from "../types";

import {
  getDocumentMaxLength,
  getRequestDateFormat,
  handleValidate,
} from "../lib";

describe("Test singUpStepThreeServices", () => {
  it("Test getDateMack function", () => {
    const resolve1 = getDateMack("2132");
    expect(resolve1).toBe("21/32");

    const resolve2 = getDateMack("21/32");
    expect(resolve2).toBe("21/32");

    const resolve3 = getDateMack("21/3234");
    expect(resolve3).toBe("21/32/34");

    const resolve4 = getDateMack("21/32/34");
    expect(resolve4).toBe("21/32/34");

    const resolve5 = getDateMack("21/32/2311");
    expect(resolve5).toBe("21/32/2311");

    const resolve6 = getDateMack("21322323");
    expect(resolve6).toBe("21/32/2323");

    const resolve7 = getDateMack("213/223/23");
    expect(resolve7).toBe("21/32/2323");

    const resolve8 = getDateMack("21");
    expect(resolve8).toBe("21");
  });

  it("Test getRequestDateFormat function", () => {
    const resolve1 = getRequestDateFormat("21/32");
    expect(resolve1).toBe("32-21");

    const resolve2 = getRequestDateFormat("26/32");
    expect(resolve2).toBe("32-26");

    const resolve3 = getRequestDateFormat("21/32/34");
    expect(resolve3).toBe("34-32-21");

    const resolve4 = getRequestDateFormat("21/32/3422");
    expect(resolve4).toBe("3422-32-21");

    const resolve5 = getRequestDateFormat("2/1/3/2/2/3/1/1");
    expect(resolve5).toBe("1-1-3-2-2-3-1-2");
  });

  it("Test handleValidate function", () => {
    const initialValues1: InitialValuesType = {
      pesel: "",
      documentType: POLISH_ID,
      documentID: "",
      documentExpirationDate: "21/12/2025",
    };
    const initialValues2 = {
      ...initialValues1,
      documentExpirationDate: "28/02/2030",
    };
    const initialValues3 = {
      ...initialValues1,
      documentExpirationDate: "32/12/2025",
    };
    const initialValues4 = {
      ...initialValues1,
      documentExpirationDate: "31/04/3012",
    };
    const initialValues5 = {
      ...initialValues1,
      documentExpirationDate: "29/02/2025",
    };

    const resolve1 = handleValidate(initialValues1);
    expect(resolve1).toBeTruthy;

    const resolve2 = handleValidate(initialValues2);
    expect(resolve2).toBeTruthy;

    const resolve3 = handleValidate(initialValues3);
    expect(resolve3).toBeFalsy;

    const resolve4 = handleValidate(initialValues4);
    expect(resolve4).toBeFalsy;

    const resolve5 = handleValidate(initialValues5);
    expect(resolve5).toBeFalsy;
  });

  it("Test getDocumentMaxLength function", () => {
    expect(getDocumentMaxLength(POLISH_ID).max).toEqual(9);
    expect(getDocumentMaxLength(POLISH_ID).min).toEqual(0);

    const testArr1 = new Array(1000);

    testArr1.forEach(() => {
      const result = {
        max: Math.floor(Math.random() * 100),
        min: Math.floor(Math.random() * 100),
      };
      if (result.max !== 9) {
        expect(getDocumentMaxLength(POLISH_ID).max).not.toEqual(result.max);
      } else {
        expect(getDocumentMaxLength(POLISH_ID).max).toEqual(result.max);
      }
      if (result.min !== 0) {
        expect(getDocumentMaxLength(POLISH_ID).min).not.toEqual(result.min);
      } else {
        expect(getDocumentMaxLength(POLISH_ID).min).toEqual(result.min);
      }
    });

    expect(getDocumentMaxLength(PASSPORT).max).toEqual(15);
    expect(getDocumentMaxLength(PASSPORT).min).toEqual(6);

    const testArr2 = new Array(1000);

    testArr2.forEach(() => {
      const result = {
        max: Math.floor(Math.random() * 100),
        min: Math.floor(Math.random() * 100),
      };
      if (result.max !== 30) {
        expect(getDocumentMaxLength(PASSPORT).max).not.toEqual(result.max);
      } else {
        expect(getDocumentMaxLength(PASSPORT).max).toEqual(result.max);
      }
      if (result.min !== 30) {
        expect(getDocumentMaxLength(PASSPORT).min).not.toEqual(result.min);
      } else {
        expect(getDocumentMaxLength(PASSPORT).min).toEqual(result.min);
      }
    });
  });
});
