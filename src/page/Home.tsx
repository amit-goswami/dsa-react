import Editor from "../components/Editor";
import HeaderOptions from "../components/HeaderOptions";
import Output from "../components/Output";
import withLoggedInOnly from "../middlewares/withLoggedInOnly";
import useAppStore from "../store/app.store";
import { calculate, selectOptions } from "../utils/calculate";

const HomePage = () => {
  const { input } = useAppStore();
  const { output } = useAppStore();
  const { showEditor } = useAppStore();
  const { solution } = useAppStore();
  const { editedSolution } = useAppStore();
  const { selectedOption } = useAppStore();
  const { setInput } = useAppStore();
  const { setOutput } = useAppStore();
  const { setShowEditor } = useAppStore();
  const { setSolution } = useAppStore();
  const { setEditedSolution } = useAppStore();
  const { setSelectedOption } = useAppStore();

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
};

export default withLoggedInOnly(HomePage);
