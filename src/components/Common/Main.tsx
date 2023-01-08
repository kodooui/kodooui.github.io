import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const MainWrapper = styled.div`
  position: relative;
  margin-top: 90px;
`

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: 22fr 65fr 13fr;
`

const Main: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainWrapper>
      <Container>
        { children }
      </Container>
    </MainWrapper>
  )
}

export default Main