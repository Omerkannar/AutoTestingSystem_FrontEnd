import styled from "styled-components";

export const PlanTable = styled.table`
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    border-collapse: collapse;
    width: 100%;
    box-sizing: border-box;
    & > thead > tr > *, tbody > tr > * {
        padding: 6px;
        box-sizing: border-box;
    }
    & > thead > tr > th {
        border: 1px solid #ccc;
        background-color: #0f4377;
    }
    & > tbody > tr > td {
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        color: #21242b;
    }
`

export const UpdateBtn = styled.button`
  margin: 0;
  padding: 6px 14px;
  height: min-content;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 6px;
  background: dodgerblue;
  color: #f1f1f1;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;