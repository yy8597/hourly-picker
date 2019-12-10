import React from "react";
import Styled from "styled-components";
const Col = Styled.div`
  box-sizing: border-box;
  float: left;
  background: #eee;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  overflow: hidden;
  height: 10px;

`;

export default ({ row, col, on = {} }) => {
  const base = React.createRef();
  // const [wholeWidth, updateWholeWidth] = useState(500);
  const width = 100 / col + "%";

  const Rows = new Array(row).fill(0);
  const Cols = new Array(col).fill(0);
  const onEvents = (x, y) => {
    const ret = {};
    Object.keys(on).forEach(event => {
      ret[event] = evt => on[event](evt, x, y);
    });
    return ret;
  };
  // console.log(onEvents);
  return (
    <div ref={base}>
      {Rows.map((x, i) => {
        return (
          <div key={i}>
            {Cols.map((x, j) => {
              return <Col {...onEvents(i, j)} key={j} style={{ width }} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
