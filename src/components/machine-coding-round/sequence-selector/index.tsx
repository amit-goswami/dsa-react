import { useEffect, useState } from "react";

export const SequenceSelector = () => {
  const boxes = new Array(6).fill(0);
  const [selectedBox, setSelectedBox] = useState<number[]>([]);
  const [isFull, setIsFull] = useState(false);

  const handleClick = (index: number) => {
    if (selectedBox.includes(index)) return;
    setSelectedBox((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (selectedBox.length === boxes.length) {
      setIsFull(true);
    }
  }, [selectedBox.length, boxes.length]);

  useEffect(() => {
    if (isFull) {
      const interval = setInterval(() => {
        if (selectedBox.length === 0) {
          clearInterval(interval);
          setIsFull(false);
          return;
        }
        setSelectedBox((prev) => {
          const lastSelectedIndex = prev[prev.length - 1];
          return prev.filter((item) => item !== lastSelectedIndex);
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedBox, isFull]);

  return (
    <div className="boxes">
      {boxes.map((_, index) => {
        const isIndexInSelectedBox = selectedBox.includes(index);
        return (
          <div
            key={index}
            className={`box ${
              isIndexInSelectedBox ? "box__selected" : "box__notSelected"
            }`}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};
