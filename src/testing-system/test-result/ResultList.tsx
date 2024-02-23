import React from "react";
import {
  Box,
  DivColumn,
  DivRow,
  MainContainer,
  TestingContainer,
} from "../GeneralStyles.styled";
import { ApplyBtn } from "../infrastructure/InfrastructureVersion.styled";
import ResultListHeader from "./ResultListHeader";
import ResultTableList from "./ResultTableList";
import ResultListFooter from "./ResultListFooter";

const tableData = [
  {
    name: "",
    description: "",
    group: "",
    time: "",
    results: "",
  },
  {
    name: "",
    description: "",
    group: "",
    time: "",
    results: "",
  },
  {
    name: "",
    description: "",
    group: "",
    time: "",
    results: "",
  },
  {
    name: "",
    description: "",
    group: "",
    time: "",
    results: "",
  },
];

const ResultList = () => {  

  return (
    <TestingContainer>
      <MainContainer>
        <ResultListHeader />
        <DivColumn gap="10px 0">
            <h3>Test Result List</h3>
            <DivRow>
              <ResultTableList>
                {tableData.map((item, i) => {
                  return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.group}</td>
                    <td>{item.time}</td>
                    <td>{item.results}</td>
                  </tr>
                })}
              </ResultTableList>
            </DivRow>
        </DivColumn>
        <ResultListFooter />
      </MainContainer>
    </TestingContainer>
  );
};

export default ResultList;
