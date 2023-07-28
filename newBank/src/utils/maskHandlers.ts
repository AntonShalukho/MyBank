/* eslint-disable no-return-assign */
import { MutableRefObject } from "react";

const cleanRegexpMap = {
  "+375 XX XXX-XX-XX": /\d/g,
  "******": /\d/g,
};

type PatternType = keyof typeof cleanRegexpMap;

export type MaskOptionsType = {
  maskSymbol: string;
  pattern: PatternType;
  caretPositions: number[];
};

export const getCaretPositions = (pattern: string, maskSymbol: string) => {
  let startPosition = 0;
  return Array.from(pattern, (char, index) =>
    char === maskSymbol ? (startPosition = index + 1) : startPosition
  );
};

export const clean = (
  input: string,
  pattern: PatternType,
  maskSymbol: string
): string[] => {
  const checkInput = input.match(cleanRegexpMap[pattern]) || [];
  return Array.from(pattern, (char) =>
    checkInput[0] === char || char === maskSymbol
      ? checkInput.shift() || char
      : char
  );
};

export const format = (
  ref: MutableRefObject<HTMLInputElement | null>,
  back: boolean,
  maskOptions: MaskOptionsType
): void => {
  const { maskSymbol, pattern, caretPositions } = maskOptions;
  const firstMaskSymbolIndex = pattern
    .split("")
    .findIndex((char) => char === maskSymbol);
  const selectionStart = ref.current!.selectionStart!;
  const firstMaskSymbolInCleanValue = clean(
    ref.current!.value.slice(0, selectionStart),
    pattern,
    maskSymbol
  ).findIndex((char: string) => char === maskSymbol);
  const newCaretPosition =
    selectionStart < 0
      ? caretPositions[caretPositions.length - 1]
      : back
      ? caretPositions[firstMaskSymbolInCleanValue - 1] || firstMaskSymbolIndex
      : firstMaskSymbolInCleanValue;
  // eslint-disable-next-line no-param-reassign
  ref.current!.value = clean(ref.current!.value, pattern, maskSymbol).join("");
  ref.current!.setSelectionRange(newCaretPosition, newCaretPosition);
};

export const maskHandler = (inputValue: string, maskSymbol: string): string =>
  inputValue.includes(maskSymbol)
    ? inputValue.slice(0, inputValue.indexOf(maskSymbol))
    : inputValue;
