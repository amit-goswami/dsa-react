type OutputProps = {
  output: string | null;
};

const Output = ({ output }: OutputProps) => {
  return (
    <div>
      {output && (
        <p>
          Output: <>{output}</>
        </p>
      )}
    </div>
  );
};

export default Output;
