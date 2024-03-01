type Input = string | number | readonly string[];
type SetOutput = (value: string | null) => void;

interface ISolutionFunctions {
  input: Input;
  setOutput: SetOutput;
}

const containsDuplicate = ({ input, setOutput }: ISolutionFunctions) => {
  console.log(input, setOutput);
  setOutput("Contains Duplicate");
};

const validAnagram = ({ input, setOutput }: ISolutionFunctions) => {
  console.log(input, setOutput);
  setOutput("Valid Anagram");
};

export const solutions = {
  containsDuplicate,
  validAnagram,
};
