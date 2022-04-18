import { useEffect,  useState } from "react";
//抽离
import generateId from "./createId";
import useUpdate from "./useUpdate";
export const useTags = () => {
  
  let [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  //根据id匹配当前项
  let findTags = (id: string) =>
    tags.filter((item) => item.id === parseInt(id))[0];
  //传入id和name,根据id修改name值
  let updateTagName = (id: number, name: string) => {
    //如果是id相同就替换，不同就使用原来的值
    setTags(tags.map(item => (item.id === id ? { id, name } : item)));
  };
  let deleteTagById = (id:number)=>{
    setTags(tags.filter(item=>item.id!==id))
  }
  
  useEffect(()=>{
    //useEffect在commponentDidMount的时候执行了两次
    let data = JSON.parse(window.localStorage.getItem('tags') || '[]')
    console.log('after mount')
    if(data.length<1){
      setTags([
        { id: generateId(), name: "衣" },
        { id: generateId(), name: "食" },
        { id: generateId(), name: "住" },
        { id: generateId(), name: "行" },
      ])
    }else{
      setTags(data)
    }
    
  },[])
  //数据变化时更新，第一次不更新
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])

  return {
    tags,
    setTags,
    findTags,
    updateTagName,
    deleteTagById
  };
};
