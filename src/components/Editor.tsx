type EditorProps = {
  editedSolution: string;
  setEditedSolution: (value: string) => void;
};

function Editor({ editedSolution, setEditedSolution }: EditorProps) {
  const handleSolutionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEditedSolution(value);
  };
  return (
    <div className="editor-container">
      <textarea
        id="editor"
        className="editor"
        value={editedSolution}
        onChange={(e) => handleSolutionChange(e)}
      ></textarea>
    </div>
  );
}

export default Editor;
