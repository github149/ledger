
import Layout from "../components/Layout";
import styled from "styled-components";
const Main = styled.div`
  flex-grow: 1;
`;
export default function NoMatch() {
  return (
    <Layout>
      <Main> NoMatch</Main>
    </Layout>
  );
}