import React, { useState, FormEvent } from "react";

import { Formik, Form } from "formik";

import { useIntl } from "react-intl";

import { Dropdown } from "../../../components/Dropdown";

import { Button } from "../../../uikit/Button";

import { CurrencyBlock } from "../CurrencyBlock";

import { Arrows } from "../../../components/Icons";

import { CurrencyInput } from "../CurrencyInput";

import { CurrencyMapType } from "../../../services/api/sendExchangeRatesRequest";

import { exchangeAmountRegExp } from "../../../regexs";

import { icons } from "../constants";

import "./CurrencyConverterStyles.css";

const currencies = ["EUR", "USD", "GBP", "PLN", "CHF"];
const currencySymbols = ["€", "$", "£", "zł", "₣"];

const currencyBlocks = currencies.map((currency, index) => ({
  id: index,
  value: (
    <CurrencyBlock key={currency} name={currency} icon={icons[currency]} />
  ),
}));

type CurrencyConverterPropsType = {
  rates?: CurrencyMapType;
  multiplier?: number;
};

export const CurrencyConverter = ({
  rates,
  multiplier,
}: CurrencyConverterPropsType) => {
  const intl = useIntl();
  const [currencyFrom, setCurrencyFrom] = useState(0);
  const [currencyTo, setCurrencyTo] = useState(1);

  const [amountFromValue, setAmountFromValue] = useState("");

  const getRate = (from: string, to: string): string => {
    const result =
      rates && rates[from].filter((elem) => elem.currency === to)[0].rate;
    return multiplier ? (parseFloat(result!) * multiplier).toString() : result!;
  };

  const calcAmountValue = (amount: string, rate: string, direction = "to") => {
    const calculate =
      direction === "from"
        ? (num1: number, num2: number) => num1 / num2
        : (num1: number, num2: number) => num1 * num2;

    const result =
      amount === ""
        ? ""
        : (
            Math.round(calculate(parseFloat(amount), parseFloat(rate)) * 100) /
            100
          ).toFixed(2);
    return result;
  };

  const switchCurrencies = (setFieldValue: {
    (arg0: string, arg1: string): void;
  }) => {
    const [from, to] = [currencyFrom, currencyTo];
    setCurrencyFrom(to);
    setCurrencyTo(from);
    setFieldValue(
      "amountTo",
      calcAmountValue(
        amountFromValue,
        getRate(currencies[currencyTo], currencies[currencyFrom])
      )
    );
  };

  const currencyBlocksExceptCurrent = (currency: number) =>
    currencyBlocks.filter((block, index) => index !== currency);

  const isDeletePressed = (value: string): boolean => {
    const deleteButtonsInputTypes = [
      "deleteContentBackward",
      "deleteContentForward",
    ];
    return deleteButtonsInputTypes.includes(value);
  };

  const handleChange = (
    e: FormEvent<HTMLInputElement>,
    setFieldValue: {
      (arg0: string, arg1: string): void;
    }
  ) => {
    const { inputType } = e.nativeEvent as InputEvent;
    switch (e.currentTarget.name) {
      case "amountFrom":
        if (
          isDeletePressed(inputType) ||
          exchangeAmountRegExp.test(e.currentTarget.value)
        ) {
          setFieldValue("amountFrom", e.currentTarget.value);
          setAmountFromValue(e.currentTarget.value);
          setFieldValue(
            "amountTo",
            calcAmountValue(
              e.currentTarget.value,
              getRate(currencies[currencyFrom], currencies[currencyTo])
            )
          );
        }
        break;
      case "amountTo":
        if (
          isDeletePressed(inputType) ||
          exchangeAmountRegExp.test(e.currentTarget.value)
        ) {
          const amountFrom = calcAmountValue(
            e.currentTarget.value,
            getRate(currencies[currencyFrom], currencies[currencyTo]),
            "from"
          );
          setFieldValue("amountTo", e.currentTarget.value);
          setFieldValue("amountFrom", amountFrom);
          setAmountFromValue(amountFrom);
        }
        break;
      default:
    }
  };

  const handleSelected = (
    direction: string,
    id: number,
    setFieldValue: {
      (arg0: string, arg1: string): void;
    }
  ) => {
    switch (direction) {
      case "to":
        setCurrencyTo(id);
        setFieldValue(
          "amountTo",
          calcAmountValue(
            amountFromValue,
            getRate(currencies[currencyFrom], currencies[id])
          )
        );
        break;
      case "from":
        setCurrencyFrom(id);
        setFieldValue(
          "amountTo",
          calcAmountValue(
            amountFromValue,
            getRate(currencies[id], currencies[currencyTo])
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <Formik
      initialValues={{
        amountFrom: "",
        amountTo: "",
      }}
      onSubmit={() => {}}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="converters-wrapper">
            <div className="converter">
              <Dropdown
                selectedOption={
                  <CurrencyBlock
                    abbr={currencies[currencyFrom]}
                    name={currencies[currencyFrom]}
                    icon={icons[currencies[currencyFrom]]}
                  />
                }
                items={currencyBlocksExceptCurrent(currencyTo)}
                getSelectedOption={(id) =>
                  handleSelected("from", id, setFieldValue)
                }
              />
              <CurrencyInput
                name="amountFrom"
                currency={currencySymbols[currencyFrom]}
                onChange={(e) => handleChange(e, setFieldValue)}
              />
            </div>
            <div className="converter-arrows-block">
              <Button onClick={() => switchCurrencies(setFieldValue)}>
                <Arrows />
              </Button>
            </div>
            <div className="converter">
              <Dropdown
                selectedOption={
                  <CurrencyBlock
                    abbr={currencies[currencyTo]}
                    name={currencies[currencyTo]}
                    icon={icons[currencies[currencyTo]]}
                  />
                }
                items={currencyBlocksExceptCurrent(currencyFrom)}
                getSelectedOption={(id) =>
                  handleSelected("to", id, setFieldValue)
                }
              />
              <CurrencyInput
                name="amountTo"
                currency={currencySymbols[currencyTo]}
                onChange={(e) => handleChange(e, setFieldValue)}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
