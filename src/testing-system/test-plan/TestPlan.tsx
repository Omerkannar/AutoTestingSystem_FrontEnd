import React, { useState, useEffect } from "react";
import {
  Box,
  DivColumn,
  DivRow,
  MainContainer,
  TestingContainer,
} from "../GeneralStyles.styled";
import { ApplyBtn } from "../infrastructure/InfrastructureVersion.styled";
import { PlanInput, PlanTextarea, RoundedInput } from "./TestPlan.styled";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestPlan = () => {

  const navigate = useNavigate();

  // ===================================================================
  // data members
  // ===================================================================
  const [mainVersion, setMainVersion] = useState<string>("Iguazu")
  const [name, setName] = useState<string>(" ")
  const [summary, setSummary] = useState<string>("")
  const [resultThreshold, SetResultThreshold] = useState<string>("Static")
  const [prerequisite, setPrerequisite] = useState<string>("")
  const [runTimeout, setRunTimeout] = useState<string>("")
  const [site, setSite] = useState<string>("Site")
  const [environment, setEnvironment] = useState<string>("Desktop")
  // const [startPoint, setStartPoint] = useState<string>("")
  // const [testID, setTestID] = useState<string>("")

  // ===================================================================
  // Create Test
  // ===================================================================

  const notify = (status: string, testId: number) => {
    if (status === "Success")
    toast.success(`${name} (id=${testId}) Created Succefully!`, {
      theme: "dark",
      position: "top-left",
      style: {
        width: "370px",
      }
    });
    else {
      toast.error("Test Creation Failed - Test already exists", {
        theme: "dark",
        position: "top-left",
        style: {
          width: "370px",
        }
      });
    }
  }



  const onClickCreateTest = () => {
    console.log('AS:TestPlan:CreateTest -> Call Rest API -> http://127.0.0.1:5000/create_test')

    // save test
    const requestOptions_1 = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
      body: JSON.stringify({
        MainVersion: mainVersion,
        Name: name,
        Summary: summary,
        ResultThreshold: resultThreshold,
        Environment: environment,
        Prerequisite: prerequisite,
        RunTimeout: runTimeout,
        Site: site
      })
    };
    fetch("http://127.0.0.1:5000/create_test", requestOptions_1)
      .then(response => response.json())
      .then(data => {
        notify(data["Status"], data["Id"])
        if (data["Status"] == "Success") {
          console.log("Created Test Succefully")         
        } else {
          console.log("Created Test Failed")
        }
      }) 
  }

  const onClickCancel = () => {
    console.log('AS: Cancel, Go Back ...')
    navigate(-1)
  }

  // const onClickRunTest = () => {
  //   console.log('AS: Run  ...')

  //   console.log('AS:TestPlanList:RunTest -> Call Rest API -> http://127.0.0.1:5000/run_test')
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ TestID: testID })
  //   };
  //   fetch("http://127.0.0.1:5000/run_test", requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  const handleMainVersionOnChange = (e: any) => {
    setMainVersion(e.target.value)
  };

  const handleNameOnChange = (e: any) => {
    setName(e.target.value)
    // setTestID(e.target.value)
  };

  const handleSummaryOnChange = (e: any) => {
    setSummary(e.target.value)
  };

  const handlePrerequisiteOnChange = (e: any) => {
    setPrerequisite(e.target.value)
  };

  const handleEnvironmentOnChange = (e: any) => {
    setEnvironment(e.target.value)
  };

  const handleTimeoutOnChange = (e: any) => {
    setRunTimeout(e.target.value)
  };

  const handleFinalThresholdOnChange = (e: any) => {
    SetResultThreshold(e.target.value)
  };

  const handleSiteOnChange = (e: any) => {
    setSite(e.target.value)
  };


  return (
    <TestingContainer>
      <MainContainer>
        <DivColumn>
          <h3>Elbit Testing System</h3>
        </DivColumn>
        <br />
        <DivColumn gap="10px 0">
          <Box>
            <h4>Create Test Plan</h4>
            <DivRow>
              <DivColumn gap="10px 0">

                {/* Test Name */}
                {/* <DivRow justify="space-between" onChange={handleMainVersionOnChange}> */}
                <DivRow justify="space-between" >
                  <p>Main version:</p>
                  {/* <PlanInput type="text" /> */}
                  <RoundedInput value={mainVersion} onChange={handleMainVersionOnChange}>
                    <option value="Arbel">Arbel</option>
                    <option value="Bental">Bental</option>
                    <option value="Gilboa">Gilboa</option>
                    <option value="Dalton">Dalton</option>
                    <option value="Everest">Everest</option>
                    <option value="Fuji">Fuji</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Iguazu">Iguazu</option>
                  </RoundedInput>
                </DivRow>

                {/* Test Name */}
                <DivRow justify="space-between" onChange={handleNameOnChange}>
                  <p>Test Name:</p>
                  <PlanInput type="text" />
                </DivRow>

                {/* Test Summary */}
                <DivRow justify="space-between" align="start">
                  <p>Test Summary:</p>
                </DivRow>
                <DivColumn onChange={handleSummaryOnChange}>
                  <PlanTextarea rows={7} />
                </DivColumn>
                <br />

                {/* Final Threshold */}
                <DivRow justify="space-between">
                  <p>Final Threshold:</p>
                  {/* <PlanInput type="text" onChange={handleFinalThresholdOnChange} /> */}
                  <RoundedInput value={resultThreshold} onChange={handleFinalThresholdOnChange}>
                    <option value="Static">Static</option>
                    <option value="Dynamic">Dynamic</option>
                    <option value="Extreme">Extreme</option>
                  </RoundedInput>
                </DivRow>

                {/* Prerequisite */}
                <DivRow justify="space-between" >
                  <p>Prerequisite:</p>
                  <PlanInput type="text" onChange={handlePrerequisiteOnChange} />
                </DivRow>

                {/* Start Environment */}
                <DivRow justify="space-between" >
                  <p>Environment:</p>
            
                  <RoundedInput value={environment} onChange={handleEnvironmentOnChange}>
                    <option value="Desktop">Desktop</option>
                    <option value="IOS">IOS</option>
                    <option value="None">None</option>
                  </RoundedInput>
                </DivRow>

                {/* Timeout */}
                <DivRow justify="space-between"  >
                  <p>Timeout:</p>
                  <PlanInput type="text" onChange={handleTimeoutOnChange} />
                </DivRow>

                {/* Timeout */}
                <DivRow justify="space-between"  >
                  <p>Site:</p>
                  <RoundedInput value={resultThreshold} onChange={handleSiteOnChange}>
                    <option value="Israel Lab">Israel Lab</option>
                    <option value="U.S Lab">U.S Lab</option>
                    <option value="Site">Site</option>
                  </RoundedInput>
                </DivRow>
              </DivColumn>
            </DivRow>
          </Box>
        </DivColumn>

        <br />
        <br />

        <DivRow style={{ gap: "0 10px" }}>
          <ApplyBtn bgcolor="#ccc" color="#333" onClick={onClickCancel}>Cancel</ApplyBtn>
          <ApplyBtn bgcolor="dodgerblue" onClick={onClickCreateTest}>Run</ApplyBtn>
          <ToastContainer />
        </DivRow>
      </MainContainer>
    </TestingContainer>
  );
};

export default TestPlan;
