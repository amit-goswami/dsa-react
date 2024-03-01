import { Dispatch, SetStateAction } from "react";
import { solutions } from "./solutions";

export const selectOptions = [
  { key: 0, value: "Contains Duplicate", label: "Contains Duplicate" },
  { key: 1, value: "Valid Anagram", label: "Valid Anagram" },
];

export const calculate = (
  input: string | number | readonly string[],
  selectOptions: string | null,
  setOutput: Dispatch<SetStateAction<string | null>>
) => {
  switch (selectOptions) {
    case "Contains Duplicate":
      solutions.containsDuplicate({ input, setOutput });
      break;
    case "Valid Anagram":
      solutions.validAnagram({ input, setOutput });
      break;
    default:
      solutions.containsDuplicate({ input, setOutput });
  }
};
