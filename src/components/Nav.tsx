//将导航组件从App组件抽离
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

// import y from "../icons/money.svg"
// import z from "../icons/tags.svg"

const Navbar = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 8px 0px;

    > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default function Nav() {
  return (
    <Navbar>
      <ul>
        <li>
          <Icon name="#tags" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <Icon name="#money" />
          <Link to="/about">About</Link>
        </li>
        <li>
          <Icon name="#chart" />
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </Navbar>
  );
}
