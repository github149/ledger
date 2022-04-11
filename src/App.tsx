import styled from "styled-components";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`;

const Main = styled.div`
  
  border:1px solid lime;
  flex-grow:1;
`
export default function App() {
  return (
    <Router>
      <Wrap>
        <Main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route element={NoMatch}/>
        </Routes>
        </Main>
        <Nav />
      </Wrap>
    </Router>
  );
}
function About() {
  return <>about</>;
}
function Users() {
  return <>users</>;
}

function Home() {
  return <>home</>;
}
function NoMatch() {
  return <>404</>;
}

