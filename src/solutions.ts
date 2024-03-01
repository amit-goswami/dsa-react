type Input = string | number | readonly string[];
type SetOutput = (value: string | null) => void;

interface ISolutionFunctions {
  input: Input;
  setOutput: SetOutput;
}

const containsDuplicate = ({ input, setOutput }: ISolutionFunctions) => {
  let boolean = false;
  const splitInput = input.toString().split("");
  const set = new Set(splitInput);
  if (set.size !== splitInput.length) {
    boolean = true;
  }
  setOutput(
    `${!boolean ? "No" : "Yes"}, It ${
      !boolean ? "does't" : ""
    } contains duplicate`
  );
};

const validAnagram = ({ input, setOutput }: ISolutionFunctions) => {
  console.log(input, setOutput);
  setOutput("Valid Anagram");
};

export const solutions = {
  containsDuplicate,
  validAnagram,
};
