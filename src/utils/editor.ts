import { Dispatch, SetStateAction } from "react";

export const editor = (
  input: string | number,
  editedSolution: string,
  setOutput: Dispatch<SetStateAction<string | null>>
) => {
  try {
    const solution = new Function("editorFunction", editedSolution);
    const output = solution(input);
    setOutput(output);
  } catch (error) {
    alert(error);
    setOutput(null);
  }
};
