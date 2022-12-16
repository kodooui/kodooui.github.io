import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const MainWrapper = styled.div`
  margin-top: 80px;

  @media (max-width: 767px) {
    margin: 30px 20px 0;
  }
`

const Main: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainWrapper>
      { children }
    </MainWrapper>
  )
}

export default Main