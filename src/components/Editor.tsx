import { Dispatch, SetStateAction } from "react";
import { editor } from "../utils/editor";

type EditorProps = {
  showEditor: boolean;
  solution: string;
  editedSolution: string;
  input: string | number;
  setEditedSolution: (value: string) => void;
  setOutput: Dispatch<SetStateAction<string | null>>;
};

function Editor({
  showEditor,
  solution,
  editedSolution,
  input,
  setEditedSolution,
  setOutput,
}: EditorProps) {
  const handleEditedSolution = () => {
    editor(input, editedSolution, setOutput);
  };

  const handleSolutionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEditedSolution(value);
  };

  return (
    <div>
      {showEditor && (
        <div className="app__editor">
          <div className="editor-container">
            <p>Solution: </p>
            <textarea
              id="editor"
              className="editor"
              value={editedSolution}
              onChange={(e) => handleSolutionChange(e)}
            ></textarea>
            <button
              onClick={() => handleEditedSolution()}
              disabled={solution === editedSolution}
            >
              Run
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Editor;
