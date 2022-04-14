import { useState } from "react";
//抽离
import generateId from "./createId";
const  defaultTags = [
    { id: generateId(), name: "衣" },
    { id: generateId(), name: "食" },
    { id: generateId(), name: "住" },
    { id: generateId(), name: "行" },
]
export const useTags = () => {
  let [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  //根据id匹配当前项
  let findTags =(id:string)=> tags.filter(item=>item.id === parseInt(id))[0]
  //传入id和name,根据id修改name值
  let updateTagName = (id:number,name:string) => {
      const index = tags.findIndex(item=>item.id===id)
      let newTags = [...tags]
      newTags.splice(index,1)
      setTags([...newTags,{id,name}])
      //更新tags
  }
  return {
    tags,
    setTags,
    findTags,
    updateTagName
  };
};
