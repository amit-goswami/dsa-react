import { create } from "zustand";

type AppState = {
  input: string | number;
  output: string | null;
  selectedOption: string | null;
  showEditor: boolean;
  solution: string;
  editedSolution: string;
  setInput: (input: string | number) => void;
  setOutput: (output: string | null) => void;
  setSelectedOption: (selectedOption: string | null) => void;
  setShowEditor: (showEditor: boolean) => void;
  setSolution: (solution: string) => void;
  setEditedSolution: (editedSolution: string) => void;
};

const useAppStore = create<AppState>((set) => ({
  input: "",
  output: null,
  selectedOption: null,
  showEditor: false,
  solution: "",
  editedSolution: "",
  setInput: (input) => set({ input }),
  setOutput: (output) => set({ output }),
  setSelectedOption: (selectedOption) => set({ selectedOption }),
  setShowEditor: (showEditor) => set({ showEditor }),
  setSolution: (solution) => set({ solution }),
  setEditedSolution: (editedSolution) => set({ editedSolution }),
}));

export default useAppStore;
