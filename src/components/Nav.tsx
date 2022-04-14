//将导航组件从App组件抽离
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import Icon from "./Icon";

const Navbar = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 8px 0px;

    > li {
      flex: 1;
      > a {
        &.light{
          color:red;
          >.icon{
            fill:red;
          }
        }
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export default function Nav() {
  return (
    <Navbar>
      <ul>
        <li>

          <NavLink  to="/tags" className={({ isActive }) =>isActive ? "light" : ""}>
            <Icon name="#tags" />
            tags
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive }) =>isActive ? "light" : ""}>
            <Icon name="#money" />
            money
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts" className={({ isActive }) =>isActive ? "light" : ""}>
            <Icon name="#chart" />
            charts
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}
