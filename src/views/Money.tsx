import Nav from "../components/Nav";
import Layout from "../components/Layout";
import {Remark}  from "components/money/Remark";

import {Keypad} from "components/money/KeyPad";
import { TagsSection } from "components/money/TagsSection";
import { Button } from "components/money/Button";
import { useState } from "react";
import { Main } from "components/Main";
import dayjs from 'dayjs';

//定义全局数据


export default function Money() {
  let defaultValue = JSON.parse(window.localStorage.getItem('tags') || '[]')
  if(defaultValue.length > 0){
    defaultValue = [defaultValue[0]]
  }
  let [value,setValue] = useState({
    tags:defaultValue as {id:number,name:string}[],
    notes:'',
    category:'-' as ('+' | '-'),
    amount:'',
    createdAt:dayjs(new Date()).format( "YYYY年MM月DD日") 
  })
 
  
  return (
    <Layout>
      <Main>
        {value.notes}
        <TagsSection value={value.tags} onCheck={(tags)=>setValue({
          ...value,
          tags,
        })}/>
        <Remark value={value.notes} onCheck={(notes:string)=>setValue({
          ...value,
          notes
        })}/>
        <Button value={value.category} onCheck={(category)=>setValue({
          ...value,
          category
        })}/>
        
        <Keypad record={value}  value={value.amount} onCheck={(amount:any)=>{
          return setValue({
          ...value,
          amount
        })}}></Keypad>
      </Main>
      <Nav />
    </Layout>
  );
}






