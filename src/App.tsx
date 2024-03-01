import Editor from "./components/Editor";
import Output from "./components/Output";
import HeaderOptions from "./components/HeaderOptions";
import { useState } from "react";
import { calculate, selectOptions } from "./utils/calculate";

function App() {
  const [input, setInput] = useState<string | number>("");
  const [output, setOutput] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [solution, setSolution] = useState<string>("");
  const [editedSolution, setEditedSolution] = useState<string>("");

  const handleClear = () => {
    setInput("");
    setShowEditor(false);
    setOutput(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOutput(null);
    setShowEditor(false);
    setInput(value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOutput(null);
    setShowEditor(false);
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (!input || !selectOptions) return;
    setShowEditor(true);
    calculate(input, selectedOption, setOutput, setSolution, setEditedSolution);
  };

  return (
    <div className="app">
      <HeaderOptions
        input={input}
        selectOptions={selectOptions}
        handleInputChange={handleInputChange}
        handleClear={handleClear}
        handleOptionChange={handleOptionChange}
        handleSubmit={handleSubmit}
      />
      <Output output={output} />
      <Editor
        showEditor={showEditor}
        solution={solution}
        editedSolution={editedSolution}
        input={input}
        setEditedSolution={setEditedSolution}
        setOutput={setOutput}
      />
    </div>
  );
}

export default App;
