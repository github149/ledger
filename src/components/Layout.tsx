import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`;


export default function Layout(props: any) {
  return (
    <Wrap>
      {props.children}
    </Wrap>
  );
}
