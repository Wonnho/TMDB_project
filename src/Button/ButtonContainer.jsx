import React from "react";
import Button from "./Button";

export default function ButtonContainer() {
  const buttonColor=['blue','magenta','violet'];
  const buttonText=['확인','취소','보류','1억년']
  const buttonData=[
    {backgroundColor:"blue",text:"확인",color:"black"},
    {backgroundColor:"magenta",text:"취소"},
    {backgroundColor:"violet",text:"보류"},
    {backgroundColor:"violet",text:"1억년"},
  ];
  const buttons=buttonData.map((button)=>{
    const {color,backgroundColor,text}=button;
    return <Button backgroundColor={backgroundColor}>{text}</Button> 
  });
   
  return <>{buttons}</>
}
