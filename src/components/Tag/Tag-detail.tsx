import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import Layout from "components/Layout";
import Nav from "components/Nav";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "utils/useTags";
const Content = styled.div`
  flex-grow: 1;
  background: #f2f2f2;
`;
const TopBar = styled.div`
  line-height: 20px;
  background: #fff;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    width: 24px;
    height: 24px;
  }
`;
const Edit = styled.div`
  padding: 0px 16px;
  line-height: 20px;
  background: #fff;
  margin-top: 8px;
  > label {
    > input {
      border: none;
      padding: 15px;
    }
  }
`;

type Params = {
  id: string;
};
export default function Detail() {
  let { id } = useParams<Params>();
  let navigate = useNavigate();

  let { updateTagName, findTags, deleteTagById } = useTags();
  let tagName = findTags(id as string);
  let goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Content>
        <TopBar>
          <Icon name="#left" onClick={goBack}></Icon>
          编辑标签
          <Icon></Icon>
        </TopBar>
        {tagName ? (
          <div>
            <Edit>
              <label>
                标签名{" "}
                <input
                  type="text"
                  value={tagName.name}
                  onChange={(e) =>
                    updateTagName(parseInt(id as string), e.target.value)
                  }
                />
              </label>
            </Edit>
            <Center>
              <Button onClick={() => deleteTagById(parseInt(id as string))}>
                删除标签
              </Button>
            </Center>
          </div>
        ) : (
          <Center>tag不存在</Center>
        )}
      </Content>
      <Nav></Nav>
    </Layout>
  );
}
