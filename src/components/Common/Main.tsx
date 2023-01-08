import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const MainWrapper = styled.div`
  position: relative;
  margin-top: 90px;
`

const Main: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainWrapper>
      { children }
    </MainWrapper>
  )
}

export default Main