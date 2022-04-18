import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecord } from "utils/useRecord";
import { NumberKeyPad } from "./KepPad/NumberKeyPad";

type Props = {
  value: string;
  record: any;
  onCheck: (amount: string | ((amount: string) => void)) => void;
};

export const Keypad: React.FC<Props> = function (props) {
  const navigate = useNavigate();
  let number = props.value;
  let setNumber = props.onCheck;
  let { recordData, setRecord } = useRecord();
  let addRecord = (record: any) => {
    setRecord([...recordData, record]);
  };
  let generateNumber = (e: React.MouseEvent) => {
    let text = (e.target as HTMLButtonElement).innerText;
    if (number.length > 16) {
      number = number.slice(0, 16);
      setNumber(number);
    }

    switch (text) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (number === "0") {
          setNumber(text);
          return;
        }
        setNumber(number.concat(text));
        break;
      case "删除":
        setNumber(number.slice(0, -1));
        break;
      case "清空":
        setNumber("");
        break;
      case ".":
        if (number.split("").includes(".")) {
          return;
        }

        setNumber(number.concat(text));
    }
  };
  return (
    <NumberKeyPad>
      <div className="output">{number}</div>
      <div className="container" onClick={generateNumber}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button
          className="ok"
          onClick={async () => {
            let { tags, amount } = props.record;
            if (tags.length === 0) {
              alert("标签还未选择");
              return;
            }
            if (amount === "") {
              alert("金额还未输入");
              return;
            }

            await addRecord(props.record);
            // debugger

            navigate("/charts");
          }}
        >
          OK
        </button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberKeyPad>
  );
};
