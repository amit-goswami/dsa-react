import Editor from "./components/Editor";
import { useState } from "react";
import { calculate, selectOptions } from "./utils/calculate";
import { editor } from "./utils/editor";

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

  const handleEditedSolution = () => {
    if (!editedSolution || !selectOptions) return;
    editor(input, editedSolution, setOutput);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      <button onClick={() => handleClear()}>Clear</button>
      <select onChange={(e) => handleOptionChange(e)}>
        {selectOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <button onClick={() => handleSubmit()}>Submit</button>
      <p>Output {output && <>{output}</>}</p>
      {showEditor && (
        <div className="app__editor">
          <Editor
            editedSolution={editedSolution}
            setEditedSolution={setEditedSolution}
          />
          <button
            onClick={() => handleEditedSolution()}
            disabled={solution === editedSolution}
          >
            Run
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
