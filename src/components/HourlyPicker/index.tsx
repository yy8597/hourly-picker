import React from "react";
import Dom from "./dom";

const useTimeSplit = () => {
  return {
    row: 7,
    col: 24
  };
};

interface Pos {
  x: any;
  y: any;
}

const useStore = () => {
  // const [key, setKey] = useState(false);
  // const [startPos, setStartPos] = useState([0, 0]);
  // const [endPos, setEndPos] = useState([0, 0]);
  // console.log(1, startPos, endPos);

  return {
    start({ x = 0, y = 0 } = {}) {
      console.log(x, y);
      // setKey(true);
      // setStartPos([x, y]);
    },
    end(x, y) {
      // if (key) {
      // setKey(false);
      // setEndPos([x, y]);
      // }
    },
    move(x, y) {
      // if (key && (x !== endPos[0] || y !== endPos[1])) {
      //   setEndPos([x, y]);
      // }
    }
  };
};

const getPos = (target: HTMLElement): Pos => ({
  x: target.getAttribute("data-x"),
  y: target.getAttribute("data-y")
});

export default () => {
  const { row, col } = useTimeSplit();
  const { start, end, move } = useStore();

  const on = {
    onMouseDown(evt: any) {
      start(getPos(evt.target));
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
