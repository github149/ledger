import styled from "styled-components"
const Mark = styled.div`
  display: flex;
  line-height: 18px;
  padding: 10px 16px;
  background: #e5e5e5;
  justify-content:center;
  align-items:center;
  > input {
    flex-grow:1;
    vertical: middle;
    font-size: 14px;
    margin-left: 16px;
    border: none;
    outline: none;
    padding: 5px;
    background: #e5e5e5;
  }
`;
export default function Remark() {
  return (
    <Mark>
      <div>备注</div>
      <input type="text" placeholder="在这里添加备注" />
    </Mark>
  );
}