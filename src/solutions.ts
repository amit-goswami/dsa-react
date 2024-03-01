type Input = string | number | readonly string[];
type SetOutput = (value: string | null) => void;

interface ISolutionFunctions {
  input: Input;
  setOutput: SetOutput;
}

const containsDuplicate = ({ input, setOutput }: ISolutionFunctions) => {
  //   using set
  //   let boolean = false;
  //   const set = new Set(splitInput);
  //   if (set.size !== splitInput.length) {
  //     boolean = true;
  //   }
  //   setOutput(
  //     `${!boolean ? "No" : "Yes"}, It ${
  //       !boolean ? "does't" : "does"
  //     } contains duplicate`
  //   );

  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  const sortInput = numericInput.sort((a, b) => a - b);
  for (let i = 0; i < sortInput.length; i++) {
    if (sortInput[i] === sortInput[i + 1]) {
      return setOutput("Yes, It contains duplicate");
    }
  }
  return setOutput("No, It does't contains duplicate");
};

const validAnagram = ({ input, setOutput }: ISolutionFunctions) => {
  console.log(input, setOutput);
  setOutput("Valid Anagram");
};

export const solutions = {
  containsDuplicate,
  validAnagram,
};
