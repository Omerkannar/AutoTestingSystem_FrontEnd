import React from "react";
import { DivColumn, DivRow } from "../GeneralStyles.styled";
import { UpdateBtn } from "./PlanList.styled";
import { useNavigate } from 'react-router-dom';


const PlanListFooter = ({selectedCommand} : any) => {

  const navigate = useNavigate();     
  const onClickShowTest = () =>
  {
    console.log('AS:PlanListFooter:Show Test')      
    selectedCommand("Show Test");   
  }

  const onClickPrepareTest = () =>
  {
    console.log('AS:PlanListFooter:PrepareTest')
    selectedCommand("Prepare Test");   
  }

  const onClickCreateStep = () =>
  {
    console.log('AS:PlanListFooter:CreateStep')
    selectedCommand("Run Create Step");   
  }

  const onClickStopTest = () =>
  {
    console.log('AS:PlanListFooter:Stop Test')      
    selectedCommand("Stop Test");   
  }

  const onClickGenerateATP = () =>
  {
    console.log('AS:PlanListFooter:Generate ATP')      
    selectedCommand("Generate ATP From Test");   
  }

  const onClickDelete = () =>
  {
    console.log('AS:PlanListFooter:Delete')     
    selectedCommand("Delete Test");    
  }

  const onClickDuplicate = () =>
  {
    console.log('AS:PlanListFooter:Duplicate')      
    selectedCommand("Duplicate Test");    
  }
  
  const onClickSchegular = () =>
  {
    console.log('AS:PlanListFooter:Schegular')  
    selectedCommand("Schegular Test");           
  }

  const onClickExit = () =>
  {    
    navigate(-1)
  }

  return (    
    <>
      <br />
      <hr />
      <br />
      <DivRow gap="10px">
        <UpdateBtn onClick={onClickShowTest}>Show</UpdateBtn>
        <UpdateBtn onClick={onClickPrepareTest}>Prepare</UpdateBtn>
        <UpdateBtn onClick={onClickCreateStep}>Step</UpdateBtn>
        <UpdateBtn onClick={onClickStopTest}>Stop</UpdateBtn>
        <UpdateBtn onClick={onClickGenerateATP}>ATP</UpdateBtn>
        <UpdateBtn onClick={onClickDuplicate}>Duplicate</UpdateBtn>
        <UpdateBtn onClick={onClickDelete}>Delete</UpdateBtn>
        <UpdateBtn onClick={onClickSchegular}>Schedular</UpdateBtn>
        <DivColumn align="flex-end">
          <UpdateBtn onClick={onClickExit}>Exit</UpdateBtn>
        </DivColumn>
      </DivRow>
    </>
  );
};

export default PlanListFooter;
