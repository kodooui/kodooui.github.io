import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: 22fr 65fr 13fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 3fr 7fr;
  }
  @media (min-width: 1024px) and (max-width: 1359px) {
    grid-template-columns: 22fr 78fr;
  }
`

const Container: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <ContainerWrapper>
      { children }
    </ContainerWrapper>
  )
}

export default Container