//将导航组件从App组件抽离
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Navbar = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 8px 0px;

    > li {
      flex: 1;
       
      >a{
        
        flex: 1;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
      }
      .icon{
        
          width:24px;
          height:24px
      }
      
      
      
    }
  }
`;
export default function Nav() {
  return (
    <Navbar>
      <ul>
        <li>
          <Link to="/">
            <Icon name="#tags" />
            tags
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="#money" />
            money
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <Icon name="#chart" />
            charts
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
