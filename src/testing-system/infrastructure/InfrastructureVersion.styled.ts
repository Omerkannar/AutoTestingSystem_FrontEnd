import styled from "styled-components";

export const UpdateBtn = styled.button`
  margin: 0;
  padding: 4px 12px;
  height: min-content;
  align-self: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
  background: dodgerblue;
  color: #f1f1f1;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const ApplyBtn = styled.button<{ bgcolor?: string; color?: string }>`
  margin: 0;
  padding: 8px 18px;
  height: min-content;
  align-self: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
  width: 140px;
  background: ${(p) => p.bgcolor ?? "#317c31"};
  color: ${(p) => p.color ?? "#e2e2e2"};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Dropdown = styled.select`
  padding: 2px 6px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  vertical-align: middle;
`
