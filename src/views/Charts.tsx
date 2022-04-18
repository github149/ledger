import Nav from "../components/Nav";
import Layout from "../components/Layout";

import { Main } from "components/Main";
import { useState } from "react";
import { Button } from "components/money/Button";
import { useRecord } from "utils/useRecord";
import styled from "styled-components";

const ChartList = styled.div`
  > .date {
    line-height: 40px;
    padding: 0px 16px;
    >div:nth-child(1){
      float:left;
    }
    >div:nth-child(2){
      float:right;
      color:#f60;
      &:before{
        content: "￥";
      }
      
    }
  }
  > ol {
    background: #fff;
    > li {
      display: flex;
      justify-content: space-between;
      line-height: 40px;
      padding: 0px 16px;
      .noteColor {
        color: #999999;
        margin-left: 13px;
      }
      ,
      .amount:before {
        content: "￥";
      }
    }
  }
`;
export default function Charts() {
  let [value, setValue] = useState("-" as "+" | "-");
  let { recordData } = useRecord();
  //将数据进行分类转化
  let newDate = Array.from(new Set(recordData.map((item) => item.createdAt)));
  let data = [];
  for (let i = 0; i < newDate.length; i++) {
    data.push({
      createdAt: newDate[i],
      list: recordData.filter((item) => item.createdAt === newDate[i]),
    });
  }
  return (
    <Layout>
      <Main>
        <Button
          value={value}
          onCheck={(category) => setValue(category)}
        ></Button>
        <div></div>
        {data.map((item, index) => (
          <ChartList key={index}>  
            <div className="date clearfix" style={item.list.filter((n) => n.category === value).length === 0?{display:'none'}:{display:'block'}}>
              <div>{item.createdAt}</div>
              <div className="amount">{item.list
                .filter((n) => n.category === value)
                .reduce((total, cur) => {
                  return total + parseInt(cur.amount);
                }, 0)}</div>
              
            </div>
            <ol>
              {item.list
                .filter((n) => n.category === value)
                .map((inner, idx) => (
                  <li key={idx}>
                    <div>
                      {inner.tags[0].name}
                      <span className="noteColor">{inner.notes}</span>
                    </div>
                    <span className="amount">{inner.amount}</span>
                  </li>
                ))}
            </ol>
          </ChartList>
        ))}
               
      </Main>
      <Nav />
    </Layout>
  );
}
