import React, { useEffect, useState } from "react";
import Dom from "./dom";
import Map from "./map";

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

const useMap = () => {
  const [map] = useState(new Map());
  // const [startPos, setStartPos] = useState([0, 0]);
  // const [endPos, setEndPos] = useState([0, 0]);
  // console.log(1, startPos, endPos);
  useEffect(() => {

  })

  return {
    start(pos:Pos = {}) {
      map.start(pos)

      // setKey(true);
      // setStartPos([x, y]);
    },
    end(pos:Pos = {}) {
      console.log(map.end(pos))

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
  const { start, end, move } = useMap();

  const on = {
    onMouseDown(evt: any) {
      start(getPos(evt.target));
    },
    onMouseMove(evt, x, y) {
      move(x, y);
    },
    onMouseUp(evt: any) {
      end(getPos(evt.target));
    }
  };
  return (
    <div>
      <Dom row={row} col={col} on={on} />
    </div>
  );
};
