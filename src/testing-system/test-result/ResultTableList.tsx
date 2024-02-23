import React from "react";
import { PlanTable } from "./PlanList.styled";

const ResultTableList = ({ children }: any) => {
  return (
    <PlanTable>
      <thead>
        <tr>
          <th>Step Name</th>
          <th>Step Description</th>
          <th>Step Type</th>
          <th>Step Status</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </PlanTable>
  );
};

export default ResultTableList;
