import { useEffect, useState } from "react";
import useUpdate from "./useUpdate";

export const useRecord = () => {
    let [recordData,setRecord] = useState<any[]>([])
    //添加记录都维护到这里
    useEffect(()=>{
        //useEffect在commponentDidMount的时候执行了两次
        let data = JSON.parse(window.localStorage.getItem('record') || '[]')
        setRecord(data)  
      },[])
    useUpdate(()=>{
        window.localStorage.setItem('record',JSON.stringify(recordData))
    },[recordData])
    return{
        recordData,
        setRecord
    }

};
