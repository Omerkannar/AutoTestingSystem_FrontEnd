import styled from "styled-components";

export const TestingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0;
  width: 100%;
  height: 100%;
  background: #000;
  box-sizing: border-box;
  color: #e2e2e2;
  padding: 2rem;
`;

export const MainContainer = styled.div<{width?: string}>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: ${(p) => p.width ?? "auto"};;
  max-width: 90vw;
  height: auto;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: #21242b;
  padding: 2rem;
  box-sizing: border-box;
  backdrop-filter: blur(12px);
`;

export const DivColumn = styled.div<{justify?: string, align?: string, gap?: string}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.justify ?? "center"};
  align-items: ${(p) => p.align ?? "center"};
  width: 100%;
  text-align: center;
  align-self: center;
  & > h3 {
    margin: 10px;
    margin-top: 0;
    text-transform: uppercase;
  }
  & > div > h3 {
    margin: 10px;
    text-transform: uppercase;
  }
  & > p {
    margin: 10px 0;
    font-size: 1rem;
  }
  & span {
    color: cyan;
  }
  gap: ${(p) => p.gap ?? "0"};
`;

export const DivRow = styled.div<{justify?: string, align?: string, gap?: string}>`
  display: flex;
  justify-content: ${(p) => p.justify ?? "center"};
  align-items: ${(p) => p.align ?? "center"};
  width: 100%;
  height: auto;
  box-sizing: border-box;
  & > p {
    margin: 5px;
  };
  gap: ${(p) => p.gap ?? "0"};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  background-color: #464c5c;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  box-sizing: border-box;
  & > h4 {
    margin-top: 10px;
  }
`