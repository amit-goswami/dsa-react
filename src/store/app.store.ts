import { create } from "zustand";

const navbarData = [
  { name: "Home", id: 0 },
  { name: "Harkirat", id: 1 },
  { name: "Machine Coding Round", id: 2 },
];

type AppState = {
  input: string | number;
  output: string | null;
  selectedOption: string | null;
  showEditor: boolean;
  solution: string;
  editedSolution: string;
  navBarData: { name: string; id: number }[];
  selectedNavBarItem: number;
  setInput: (input: string | number) => void;
  setOutput: (output: string | null) => void;
  setSelectedOption: (selectedOption: string | null) => void;
  setShowEditor: (showEditor: boolean) => void;
  setSolution: (solution: string) => void;
  setEditedSolution: (editedSolution: string) => void;
  setSelectedNavBarItem: (selectedNavBarItem: number) => void;
};

const useAppStore = create<AppState>((set) => ({
  input: "",
  output: null,
  selectedOption: null,
  showEditor: false,
  solution: "",
  editedSolution: "",
  navBarData: navbarData,
  selectedNavBarItem: 0,
  setInput: (input) => set({ input }),
  setOutput: (output) => set({ output }),
  setSelectedOption: (selectedOption) => set({ selectedOption }),
  setShowEditor: (showEditor) => set({ showEditor }),
  setSolution: (solution) => set({ solution }),
  setEditedSolution: (editedSolution) => set({ editedSolution }),
  setSelectedNavBarItem: (selectedNavBarItem) => set({ selectedNavBarItem }),
}));

export default useAppStore;
