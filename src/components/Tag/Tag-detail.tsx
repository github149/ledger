import Icon from "components/Icon";
import Layout from "components/Layout";
import Nav from "components/Nav";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "utils/useTags";
const Content = styled.div`
  flex-grow: 1;
  background:#f2f2f2;
`;
const TopBar = styled.div`
line-height:20px;
background:#fff;
padding:14px 16px;
display:flex;
align-items:center;
justify-content:space-between;
.icon{
    width:24px;
    height:24px;
}
  
`
const Edit = styled.div`
padding: 0px 16px;
line-height:20px;
background:#fff;
margin-top:8px;
>label{
    >input{
        border:none;
        padding:15px;
    }

}

`

type Params = {
  id: string;
};
export default function Detail() {
  let { id } = useParams<Params>();
  
  let {updateTagName,findTags} = useTags()
  let tagName =  findTags(id as string);
  
  return (
    <Layout>
      <Content>
      <TopBar>
          <Icon name="#left"></Icon>
          编辑标签
          <Icon></Icon>
      </TopBar>
      <Edit><label>标签名 <input type="text" value={tagName.name} onChange={(e)=>updateTagName(parseInt(id as string),e.target.value)}/></label></Edit>
      </Content>
      <Nav></Nav>
    </Layout>
  );
}
