import * as React from "react";
import Styled from "styled-components";
const r = () => false
const Wrap = Styled.div`
  > div div {
    box-sizing: border-box;
    float: left;
    background: #eee;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    overflow: hidden;
    height: 10px;
    user-select: none;
  }

  > div .selected {
    background: #ccc;
  }
`;

export default ({ row, col, on = {}, data = [] }) => {
  const base = React.createRef(); 
  // const [wholeWidth, updateWholeWidth] = useState(500);
  const width = 100 / col + "%";

  const Rows = new Array(row).fill(0);
  const Cols = new Array(col).fill(0);

  return (
    <Wrap ref={base} {...on} onSelect={r}>
      {Rows.map((x, i) => {
        return (
          <div key={i}>
            {Cols.map((x, j) => {
              const className = data[i] && data[i][j] ? 'selected' : '';
              return <div className={className} data-x={i} data-y={j} key={j} style={{ width }} />;
            })}
          </div>
        );
      })}
    </Wrap>
  );
};
