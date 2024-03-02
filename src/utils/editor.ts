import { toast } from "react-hot-toast";

export const editor = (
  input: string | number,
  editedSolution: string,
  setOutput: (output: string | null) => void
) => {
  try {
    const solution = new Function("editorFunction", editedSolution);
    const output = solution(input);
    setOutput(output);
  } catch (error) {
    toast.error("" + error);
    setOutput(null);
  }
};
