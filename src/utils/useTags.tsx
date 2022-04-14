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
  return {
    tags,
    setTags,
  };
};
