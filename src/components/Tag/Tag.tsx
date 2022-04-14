import { Main } from "components/Main";
import styled from "styled-components";
import Icon from "components/Icon";
import { useTags } from "utils/useTags";
import { NavLink } from "react-router-dom";
const List = styled.div`
  background: #fff;
  >ul > li {
    margin: 0px 16px;
    
    border-bottom: 1px solid #dddde0;
    >a{
        line-height:44px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        >.icon {
            width: 14px;
            height: 14px;
        }
    } 
  }
`;
const Button = styled.button`
  width: 98px;
  appearance: none;
  outline: none;
  border: none;
  background: #767676;
  font-size: 16px;
  padding: 10px 0px;
  border-radius: 5px;
  color: #fff;
  margin: 40px auto;
`;
export default function Tag() {
  let { tags } = useTags();
  return (
    <Main>
      <List>
        <ul>
          {tags.map((item) => (
            <li key={item.id}>
              <NavLink to={`/tags/${item.id}`}>
                {item.name}
                <Icon name="#right" />
              </NavLink>
            </li>
          ))}
        </ul>
      </List>
      <Button>新建标签</Button>
    </Main>
  );
}
