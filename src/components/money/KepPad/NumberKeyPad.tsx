import styled from "styled-components";

const NumberKeyPad = styled.div`
  > .output {
    min-height:54px;
    line-height: 54px;
    display: flex;
    justify-content: flex-end;
    padding-right: 16px;
    font-size: 28px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  > .container > button {
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
export { NumberKeyPad };
