import styled from "styled-components";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  border: 1px solid lime;
  flex-grow: 1;
`;
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch></NoMatch>} />
      </Routes>
    </Router>
  );
}
function About() {
  return (
    <Wrap>
      <Main>about</Main>
      <Nav />
    </Wrap>
  );
}
function Users() {
  return (
    <Wrap>
      <Main>Users</Main>
      <Nav />
    </Wrap>
  );
}
function Home() {
  return (
    <Wrap>
      <Main>home</Main>
      <Nav />
    </Wrap>
  );
}

function NoMatch() {
  return (
    <Wrap>
      <Main>这是404页面</Main>
    </Wrap>
  );
}
