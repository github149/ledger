import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
const Main = styled.div`
  border: 1px solid lime;
  flex-grow: 1;
`;
export default function Money() {
  return (
    <Layout>
      <Main> money</Main>
      <Nav />
    </Layout>
  );
}
