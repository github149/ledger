import {  useRef } from "react";
import styled from "styled-components";
const Mark = styled.div`
  display: flex;
  line-height: 18px;
  padding: 10px 16px;
  background: #e5e5e5;
  justify-content: center;
  align-items: center;
  > input {
    flex-grow: 1;
    vertical: middle;
    font-size: 14px;
    margin-left: 16px;
    border: none;
    outline: none;
    padding: 5px;
    background: #e5e5e5;
  }
`;
export const Remark: React.FC<{value:string,onCheck:(value:string)=>void}> = function (props) {
  let input = props.value;
  let setForm = props.onCheck
  let refInput = useRef<HTMLInputElement>(null);
  //非受控组件
  console.log(input)
  let getInputValue = () => {
    if (refInput.current) {
      console.log(refInput.current.value);
      setForm(refInput.current.value);
    }
  };

  return (
    <Mark>
      <div>备注</div>
      <input
        type="text"
        placeholder="在这里添加备注"
        onBlur={getInputValue}
        ref={refInput}
      />
    </Mark>
  );
};
