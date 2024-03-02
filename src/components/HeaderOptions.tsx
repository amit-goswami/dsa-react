type HeaderOptionsProps = {
  input: string | number;
  selectOptions: { key: number; value: string }[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
};

const HeaderOptions = ({
  input,
  selectOptions,
  handleInputChange,
  handleClear,
  handleOptionChange,
  handleSubmit,
}: HeaderOptionsProps) => {
  return (
    <div>
      <div className="app__input">
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter an input..."
        />
        <button
          onClick={() => handleClear()}
          disabled={input === ""}
          className="clearButton-width"
        >
          Clear
        </button>
      </div>
      <div className="app__options">
        <select onChange={(e) => handleOptionChange(e)}>
          {selectOptions.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleSubmit()}
          disabled={!input}
          className="submitButton-width"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HeaderOptions;
