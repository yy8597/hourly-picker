import * as React from "react";
import { useEffect, useState } from "react";
import Dom from "./dom";
import Map from "./map";

const useTimeSplit = () => {
  return {
    row: 24,
    col: 7
  };
};

interface Pos {
  x?: Number;
  y?: Number;
}

const useMap = (row:number, col:number) => {
  const [map] = useState(new Map<boolean>(row, col));
  const [data, setData] = useState([]);
  const [onMouseDown, setOnMouseDown] = useState(false);
  // const [startPos, setStartPos] = useState([0, 0]);
  // const [endPos, setEndPos] = useState([0, 0]);
  // console.log(1, startPos, endPos);
  useEffect(() => {

  })

  return {
    start(pos:Pos = {}) {
      const newData = map.start(pos)
      if(newData) {
        setData(newData)
      }
      setOnMouseDown(true)
      // setKey(true);
      // setStartPos([x, y]);
    },
    end(pos:Pos = {}) {
      setOnMouseDown(false)
      map.end(pos)
    },
    move(pos:Pos = {}) {
      if(onMouseDown) {
        const newData = map.move(pos)
        if(newData) {
          setData(newData)
        }
        
      }
    },
    data
  };
};

const getPos = (target: HTMLElement): Pos => ({
  x: Number(target.getAttribute("data-x")),
  y: Number(target.getAttribute("data-y"))
});

export default () => {
  const { row, col } = useTimeSplit();
  const { start, end, move, data } = useMap(row, col);

  const on = {
    onMouseDown(evt: any) {
      start(getPos(evt.target));
    },
    onMouseMove(evt: any) {
      move(getPos(evt.target));
    },
    onMouseUp(evt: any) {
      end(getPos(evt.target));
    }
  };
  return (
    <div>
      <Dom row={row} col={col} on={on} data={data} />
    </div>
  );
};
