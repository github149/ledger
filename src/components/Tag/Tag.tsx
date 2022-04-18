import { Main } from "components/Main";
import styled from "styled-components";
import Icon from "components/Icon";
import { useTags } from "utils/useTags";
import { NavLink } from "react-router-dom";
import { Button } from "components/Button";
import generateId from "utils/createId";
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

export default function Tag() {
  let { tags,setTags } = useTags();
  let addTags = ()=>{
    const tagName = window.prompt('请输入标签名') as string
    //添加标签 类型为null和""均不能添加
    if(tagName){
      //id需要变
     setTags([...tags,{id:generateId(),name:tagName}])
    }
  }
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
      <Button onClick={addTags}>新增标签</Button>
    </Main>
  );
}
