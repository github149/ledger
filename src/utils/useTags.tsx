import { useState } from "react"
//抽离
export const useTags = () =>{
    let [tags,setTags] = useState<{id:number,name:string}[]>([{id:1,name:"衣"},{id:2,name:"食"},{id:3,name:"住"},{id:4,name:"行"}])
    return {
        tags,
        setTags,
    }
}
