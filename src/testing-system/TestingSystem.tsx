import { useState } from "react";
import { DivColumn, DivRow, MainContainer, TestingContainer } from "./GeneralStyles.styled";
import { TestBtn, UpdateBtn } from "./TestingSystem.styled";
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import TestPlan from "./test-plan/TestPlan";
import ResultList from "./test-result/ResultList";

const TestingSystem = () => {

  const navigate = useNavigate();     
  
  const [posts, setPosts] = useState([]);
  
  const [testingData, setTestingData] = useState({
    version: "Gibraltar",
  });

  const onClickShowMainVersion = () =>
  {
    console.log('AUTO-TEST : Show Main Version')      
    navigate('/testing-system/infrastructure');                     
  }

  const onClickUpdateMainVersion = () =>
  {
    console.log('AUTO-TEST : Show Main Version')      
    navigate('/testing-system/infrastructure');                     
  }

  const onClickCreateTest = () =>
  {
    console.log('AUTO-TEST : Navigate to Create Test')
    navigate('/testing-system/test-plan');                     
  }

  const onClickShowTestResult = () =>
  {
    console.log('AUTO-TEST : Navigate to Show Test Results')   
    navigate('/testing-system/plan-list');                      
  }

  const onClickShowTestStatus = () =>
  {
    console.log('AUTO-TEST : Navigate to Show Test Status')    
    navigate('/testing-system/result-list');                     
  }

  const onClickShowTestConfiguration = () =>
  {
    console.log('AUTO-TEST : Navigate to Show Test Configuration')                       
    fetch('http://127.0.0.1:5000/get_all_result')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setPosts(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }

  const onClickShowTestScheguler = () =>
  {
    console.log('AUTO-TEST : Navigate to Show Test Scheguler')    
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setPosts(data);
    })
    .catch((err) => {
       console.log(err.message);
    });

  }

  const onClickApplicationExit = () =>
  {
    console.log('AUTO-TEST : Exit')    
    navigate('/testing-system/test-plan');                     
  }
  
  return (
    <TestingContainer>
      <MainContainer width="460px">
        <DivColumn>
          <h3>Elbit Testing System</h3>
          <DivRow gap='0 10px'>
            <p>
              Major Version: <span>{testingData.version}</span>
            </p>
            <UpdateBtn onClick={onClickShowMainVersion}>Show</UpdateBtn>
            <UpdateBtn onClick={onClickUpdateMainVersion}>Update</UpdateBtn>
          </DivRow>
        </DivColumn>
        <hr />
        <br />
        <DivColumn gap="20px 0">
          <TestBtn onClick={onClickCreateTest}>Create Test</TestBtn>
          <TestBtn onClick={onClickShowTestResult}>Test Library</TestBtn>
          <TestBtn onClick={onClickShowTestStatus}>Result Library</TestBtn>
          <TestBtn onClick={onClickShowTestConfiguration}>Configuration</TestBtn>
          <TestBtn onClick={onClickShowTestScheguler}>Schedule</TestBtn>
        </DivColumn>
        <br />
        <hr />
        <br />
        <DivColumn gap="20px 0">
          <TestBtn bgcolor="#464c5c" color="#f2f2f2" onClick={onClickApplicationExit}>
            EXIT
          </TestBtn>
        </DivColumn>
      </MainContainer>
      <br />
    </TestingContainer>
  );
};

export default TestingSystem;
