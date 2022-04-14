import Nav from "../components/Nav";
import Layout from "../components/Layout";
import {Remark}  from "components/money/Remark";

import {Keypad} from "components/money/KeyPad";
import { TagsSection } from "components/money/TagsSection";
import { Button } from "components/money/Button";
import { useState } from "react";
import { Main } from "components/Main";

//定义全局数据

export default function Money() {
  let [value,setValue] = useState({
    tags:[] as {id:number,name:string}[],
    notes:'',
    category:'-' as ('+' | '-'),
    amount:''
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
        
        <Keypad value={value.amount} onCheck={(amount:any)=>setValue({
          ...value,
          amount
        })}></Keypad>
      </Main>
      <Nav />
    </Layout>
  );
}






