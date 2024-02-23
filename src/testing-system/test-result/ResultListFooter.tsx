import React from "react";
import { DivColumn, DivRow } from "../GeneralStyles.styled";
import { UpdateBtn } from "./PlanList.styled";
import { useNavigate } from 'react-router-dom';

const ResultListFooter = () => {

  const navigate = useNavigate();     
  
  const onClickShowTest = () =>
  {
    console.log('AUTO-TEST : Show Test')      
  }

  const onClickRunTest = () =>
  {
    console.log('AUTO-TEST : RunTest')      
  }

  const onClickStopTest = () =>
  {
    console.log('AUTO-TEST : Stop Test')      
  }

  const onClickGenerateATP = () =>
  {
    console.log('AUTO-TEST : Generate ATP')      
  }

  const onClickExit = () =>
  {
    console.log('AUTO-TEST : Exitrsion')      
    navigate(-1)
  }


  return (
    <>
      <br />
      <hr />
      <br />
      <DivRow gap="10px" justify="space-between">
        <UpdateBtn onClick={onClickShowTest}>Show</UpdateBtn>
        <UpdateBtn onClick={onClickRunTest}>Run</UpdateBtn>
        <UpdateBtn onClick={onClickStopTest}>Stop</UpdateBtn>
        <UpdateBtn onClick={onClickGenerateATP}>ATP</UpdateBtn>
        <DivColumn align="flex-end">
          <UpdateBtn onClick={onClickExit}>Exit</UpdateBtn>
        </DivColumn>
      </DivRow>
    </>
  );
};

export default ResultListFooter;
