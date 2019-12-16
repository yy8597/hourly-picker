import * as React from "react";
import Styled from "styled-components";

const Wrap = Styled.div`
  > div div {
    box-sizing: border-box;
    float: left;
    background: #eee;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    overflow: hidden;
    height: 10px;
  }
`;

export default ({ row, col, on = {} }) => {
  const base = React.createRef();
  // const [wholeWidth, updateWholeWidth] = useState(500);
  const width = 100 / col + "%";

  const Rows = new Array(row).fill(0);
  const Cols = new Array(col).fill(0);

  // console.log(onEvents);
  return (
    <Wrap ref={base} {...on}>
      {Rows.map((x, i) => {
        return (
          <div key={i}>
            {Cols.map((x, j) => {
              return <div data-x={i} data-y={j} key={j} style={{ width }} />;
            })}
          </div>
        );
      })}
    </Wrap>
  );
};
