import { useState } from "react";
import styled from "styled-components";
type Props = {
  value:'+' | '-',
  onCheck:(value:'+' | '-')=>void
}
export const Button:React.FC<Props> = function (props) {
  const category = { "-": "支出", "+": "收入" };
  let current = props.value
  let setCurrent = props.onCheck
  let [list] = useState<("+" | "-")[]>(["-", "+"]);
  return (
    <Btn>
      {list.map((item) => (
        <div
          key={item}
          className={current === item ? "selected" : ""}
          onClick={() => setCurrent(item)}
        >
          {category[item]}
        </div>
      ))}
    </Btn>
  );
};
const Btn = styled.div`
  display: flex;
  background-color: #c4c4c4;
  > div {
    flex: 1;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    &.selected::after {
      content: "";
      display: block;
      height: 2px;
      background: #333333;
    }
  }
`;
