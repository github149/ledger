import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import Remark  from "components/money/Remark";
import Button from "components/money/Button";
import Input from "components/money/NumberIInput";
import Keypad from "components/money/KeyPad";
import { TagsSection } from "components/money/TagsSection";
const Main = styled.div`
  border: 1px solid lime;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
`;
export default function Money() {
  return (
    <Layout>
      <Main>
        <TagsSection />
        <Remark />
        <Button />
        <Input></Input>
        <Keypad></Keypad>
      </Main>
      <Nav />
    </Layout>
  );
}






