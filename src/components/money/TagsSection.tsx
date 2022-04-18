
import styled from "styled-components"
//定义一个函数组件
import generateId from "utils/createId";
import { useTags } from "utils/useTags";
export  const TagsSection:React.FunctionComponent<{value:{id:number,name:string}[],onCheck:(value:{id:number,name:string}[])=>void}> = (props) => {
   let {tags,setTags} = useTags()
   let check = props.value
   let setChecked = props.onCheck
   let addTags = ()=>{
     const tagName = window.prompt('请输入标签名') as string
     //添加标签 类型为null和""均不能添加
     if(tagName){
       //id需要变
      setTags([...tags,{id:generateId(),name:tagName}])
     }
   }
   //
   let toggleTag = (item:{id:number,name:string})=>{
      //设置只能选一个
       setChecked([{id:item.id,name:item.name}])    
   }
    return (
      <HeaderBar>
        <ul>
          {tags.map(item=>(<li key={item.id} onClick={()=>toggleTag(item)} className={check.map(item=>item.id).includes(item.id)?"selected":""}>{item.name}</li>))}
        </ul>
        <div onClick={addTags}>新增标签</div>
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
       flex-wrap:wrap;
       >li{
         &.selected{
           background:#f60;
         } 
         margin-top:8px;
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
  