import { Dispatch, SetStateAction } from "react";
import { solutions } from "./solutions";

export enum SelectOptionsValues {
  ContainsDuplicate = "Contains Duplicate",
  ValidAnagram = "Valid Anagram",
}

export const selectOptions = [
  {
    key: 0,
    value: SelectOptionsValues.ContainsDuplicate,
  },
  {
    key: 1,
    value: SelectOptionsValues.ValidAnagram,
  },
];

export const calculate = (
  input: string | number,
  selectOptions: string | null,
  setOutput: Dispatch<SetStateAction<string | null>>
) => {
  switch (selectOptions) {
    case SelectOptionsValues.ContainsDuplicate:
      solutions.containsDuplicate({ input, setOutput });
      break;
    case SelectOptionsValues.ValidAnagram:
      solutions.validAnagram({ input, setOutput });
      break;
    default:
      solutions.containsDuplicate({ input, setOutput });
  }
};
