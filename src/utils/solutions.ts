type Input = string | number;
type SetOutput = (value: string | null) => void;

interface ISolutionFunctions {
  input: Input;
  setOutput: SetOutput;
}

const stringToArray = (input: string) => {
  return input.split("");
};

const numberToArray = (input: number) => {
  return input.toString().split("");
};

const sortStringOfNumber = (input: number) => {
  const splitInput = numberToArray(input);
  const numericInput = splitInput.map(Number);
  return numericInput.sort((a, b) => a - b);
};

const bubbleSort = (input: string | number) => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  for (let i = 0; i < numericInput.length; i++) {
    for (let j = 0; j < numericInput.length - i - 1; j++) {
      if (numericInput[j] > numericInput[j + 1]) {
        let temp = numericInput[j];
        numericInput[j] = numericInput[j + 1];
        numericInput[j + 1] = temp;
      }
    }
  }
  return numericInput;
};

const selectionSort = (input: string | number) => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  for (let i = 0; i < numericInput.length; i++) {
    let min = i;
    for (let j = i + 1; j < numericInput.length; j++) {
      if (numericInput[j] < numericInput[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = numericInput[i];
      numericInput[i] = numericInput[min];
      numericInput[min] = temp;
    }
  }
  return numericInput;
};

const insertionSort = (input: string | number) => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  for (let i = 1; i < numericInput.length; i++) {
    let current = numericInput[i];
    let j = i - 1;
    while (j >= 0 && numericInput[j] > current) {
      numericInput[j + 1] = numericInput[j];
      j--;
    }
    numericInput[j + 1] = current;
  }
  return numericInput;
};

const mergeSort = (input: string | number | number[]): any => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  if (numericInput.length <= 1) {
    return numericInput;
  }
  const middle = Math.floor(numericInput.length / 2);
  const left = numericInput.slice(0, middle);
  const right = numericInput.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const quickSort = (input: string | number | number[]): any => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  if (numericInput.length <= 1) {
    return numericInput;
  }
  const pivot = numericInput[numericInput.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < numericInput.length - 1; i++) {
    if (numericInput[i] < pivot) {
      left.push(numericInput[i]);
    } else {
      right.push(numericInput[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

const countingSort = (input: string | number) => {
  const splitInput = input.toString().split("");
  const numericInput = splitInput.map(Number);
  const max = Math.max(...numericInput);
  const min = Math.min(...numericInput);
  const count = new Array(max - min + 1).fill(0);
  for (let i = 0; i < numericInput.length; i++) {
    count[numericInput[i] - min]++;
  }
  let z = 0;
  for (let i = min; i <= max; i++) {
    while (count[i - min]-- > 0) {
      numericInput[z] = i;
      z++;
    }
  }
  return numericInput;
};

const containsDuplicate = ({ input, setOutput }: ISolutionFunctions) => {
  // let boolean = false;
  // const splitInput = input.toString().split("");
  // const set = new Set(splitInput);
  // if (set.size !== splitInput.length) {
  //   boolean = true;
  // }
  // setOutput(
  //   `${!boolean ? "No" : "Yes"}, It ${
  //     !boolean ? "does't" : "does"
  //   } contains duplicate`
  // );

  const sortInput = sortStringOfNumber(input as number);
  for (let i = 0; i < sortInput.length; i++) {
    if (sortInput[i] === sortInput[i + 1]) {
      return setOutput("Yes, It does contains duplicate");
    }
  }
  return setOutput("No, It does't contains duplicate");
};

const validAnagram = ({ input, setOutput }: ISolutionFunctions) => {
  console.log(input, setOutput);
  setOutput("Valid Anagram");
};

const factorialOfNumber = ({ input, setOutput }: ISolutionFunctions) => {
  const recursiceFactorial = (n: number): number => {
    if (n === 0) return 1;
    return n * recursiceFactorial(n - 1);
  };
  setOutput(recursiceFactorial(input as number).toString());
};

const conversionFunctions = {
  stringToArray,
  numberToArray,
};

const sortingAlgorithms = {
  sortStringOfNumber,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  countingSort,
};

export const solutions = {
  conversionFunctions,
  sortingAlgorithms,
  containsDuplicate,
  validAnagram,
  factorialOfNumber,
};
