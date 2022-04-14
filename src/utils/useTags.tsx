import { useState } from "react"

export const useTags = () =>{
    let [tags,setTags] = useState<string[]>(['衣','食','住','行'])
    return {
        tags,
        setTags,
    }
}
