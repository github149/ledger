import styled from "styled-components";

const NumberInput = styled.div`
  > div {
    line-height: 54px;
    display: flex;
    justify-content: flex-end;
    padding-right: 16px;
    font-size: 28px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;
export default function Input() {
  return (
    <NumberInput>
      <div>100</div>
    </NumberInput>
  );
}