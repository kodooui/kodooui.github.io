import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: 22fr 65fr 13fr;
`

const Container: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <ContainerWrapper>
      { children }
    </ContainerWrapper>
  )
}

export default Container