//将导航组件从App组件抽离
import styled from "styled-components";
import { Link } from "react-router-dom";
import x from "../icons/chart.svg"
// import y from "../icons/money.svg"
// import z from "../icons/tags.svg"
console.log(x)

const Navbar = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 52px;
    > li {
      flex: 1;
    }
  }
`;
export default function Nav() {
  return (
    <Navbar>
      <ul>
        <li>
            
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </Navbar>
  );
}
