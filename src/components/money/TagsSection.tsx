import styled from "styled-components"
//定义一个函数组件
export  const TagsSection:React.FunctionComponent = () => {
    return (
      <HeaderBar>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div>新增标签</div>
      </HeaderBar>
    );
  }
  const HeaderBar = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
    flex-grow: 1;
     >ul{
       display:flex;
       margin-left:-8px;
       >li{ 
         background-color:#D9D9D9;
         margin-left:24px;
         font-size:14px;
         line-height:24px;
         padding:0px 18px;
         border-radius: 18px;
       }
     }
     >div{
       font-size: 14px;
       font-weight: 400;
       line-height: 22px;
       letter-spacing: 0px;
       text-align: left;
       padding:2px;
       display:inline-block;
       color:#999999;
       margin-left:18px;
       margin-top:17px;
       margin-bottom:17px;
       font-size:14px;
       border-bottom:1px solid #000;
       width:62px;
       }
     }
  `;
  