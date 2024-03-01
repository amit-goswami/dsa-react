import { useState } from "react";
import { calculate, selectOptions } from "./calculate";

function App() {
  const [input, setInput] = useState<string | number | readonly string[]>("");
  const [output, setOutput] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClear = () => {
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (!input || !selectOptions) return;
    calculate(input, selectedOption, setOutput);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      <button onClick={() => handleClear()}>Clear</button>
      <select onChange={(e) => handleOptionChange(e)}>
        {selectOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={() => handleSubmit()}>Submit</button>
      <p>Output {output && <>{output}</>}</p>
    </div>
  );
}

export default App;
