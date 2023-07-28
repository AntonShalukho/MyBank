import { useRef } from "react";

export const useVerifyRefs = () => ({
  firstInput: useRef<HTMLInputElement>(null),
  secondInput: useRef<HTMLInputElement>(null),
  thirdInput: useRef<HTMLInputElement>(null),
  fourthInput: useRef<HTMLInputElement>(null),
  fifthInput: useRef<HTMLInputElement>(null),
  sixthInput: useRef<HTMLInputElement>(null),
});
