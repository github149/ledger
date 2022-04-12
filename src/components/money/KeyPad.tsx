import styled from "styled-components";

export default function Keypad() {
  return (
    <NumberKeyPad>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="ok">OK</button>
      <button className="zero">0</button>
      <button>.</button>
    </NumberKeyPad>
  );
}
const NumberKeyPad = styled.div`
  > button {
    &:nth-child(1) {
      background: #f2f2f2;
    }
    &:nth-child(2),
    :nth-child(5) {
      background: #e0e0e0;
    }
    &:nth-child(3),
    :nth-child(6),
    :nth-child(9) {
      background: #c1c1c1;
    }
    &:nth-child(4),
    :nth-child(7),
    :nth-child(10) {
      background: #b8b8b8;
    }
    &:nth-child(8),
    :nth-child(11),
    :nth-child(13) {
      background: #a9a9a9;
    }
    &:nth-child(12) {
      background: #8b8b8b;
    }
    &:nth-child(14) {
      background: #999696;
    }
    float: left;
    width: 25%;
    line-height: 56px;
    border: none;
    font-size: 18px;
    &.ok {
      line-height: 112px;
      float: right;
    }
    &.zero {
      width: 50%;
    }
  }
`;