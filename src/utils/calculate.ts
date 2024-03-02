import { Dispatch, SetStateAction } from "react";
import { solutions } from "./solutions";

export enum SelectOptionsValues {
  ContainsDuplicate = "Contains Duplicate",
  ValidAnagram = "Valid Anagram",
  FactorialOfNumber = "Factorial of a Number",
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
  {
    key: 2,
    value: SelectOptionsValues.FactorialOfNumber,
  },
];

export const calculate = (
  input: string | number,
  selectOptions: string | null,
  setOutput: Dispatch<SetStateAction<string | null>>,
  setSolution: Dispatch<SetStateAction<string>>,
  setEditedSolution: Dispatch<SetStateAction<string>>
) => {
  switch (selectOptions) {
    case SelectOptionsValues.ContainsDuplicate:
      solutions.containsDuplicate({ input, setOutput });
      const containsDuplicateSolution = solutions.containsDuplicate.toString();
      setSolution(containsDuplicateSolution);
      setEditedSolution(containsDuplicateSolution);
      break;
    case SelectOptionsValues.ValidAnagram:
      solutions.validAnagram({ input, setOutput });
      const validAnagramSolution = solutions.validAnagram.toString();
      setSolution(validAnagramSolution);
      setEditedSolution(validAnagramSolution);
      break;
    case SelectOptionsValues.FactorialOfNumber:
      solutions.factorialOfNumber({ input, setOutput });
      const factorialOfNumberSolution = solutions.factorialOfNumber.toString();
      setSolution(factorialOfNumberSolution);
      setEditedSolution(factorialOfNumberSolution);
      break;
    default:
      solutions.containsDuplicate({ input, setOutput });
      const solution = solutions.containsDuplicate.toString();
      setSolution(solution);
      setEditedSolution(solution);
  }
};
