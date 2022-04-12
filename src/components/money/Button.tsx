import styled from "styled-components";

export default function Button() {
    return (
      <Btn>
        <div className="selected">支出</div>
        <div>收入</div>
      </Btn>
    );
  }
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