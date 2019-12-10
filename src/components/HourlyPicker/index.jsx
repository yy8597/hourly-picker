import React, { useEffect, useState } from "react";
import Dom from "./dom.jsx";

const useTimeSplit = (split = 2 * 24 * 7) => {
  return {
    row: 7,
    col: 24 * 2
  };
};

const useStore = () => {
  const [key, setKey] = useState(false);
  const [startPos, setStartPos] = useState([0, 0]);
  const [endPos, setEndPos] = useState([0, 0]);
  console.log(startPos, endPos);

  return {
    start(x, y) {
      setKey(true);
      setStartPos([x, y]);
    },
    end(x, y) {
      if (key) {
        setKey(false);
        setEndPos([x, y]);
      }
    },
    move(x, y) {
      if (key && (x !== endPos[0] || y !== endPos[1])) {
        setEndPos([x, y]);
      }
    }
  };
};

export default () => {
  const { row, col } = useTimeSplit();
  const { start, end, move } = useStore();

  const on = {
    onMouseDown(evt, x, y) {
      start(x, y);
    },
    onMouseMove(evt, x, y) {
      move(x, y);
    },
    onMouseUp(evt, x, y) {
      end(x, y);
    }
  };
  return (
    <div>
      <Dom row={row} col={col} on={on} />
    </div>
  );
};
