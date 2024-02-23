import React from "react";
import { PlanTable } from "./PlanList.styled";

const TableList = ({ children }: any) => {
  return (
    <PlanTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>MainVersion</th>
          <th>Prerequisite</th>
          <th>Threshold</th>
          <th>RunTimeout</th>
          <th>StartPoint</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </PlanTable>
  );
};

export default TableList;
