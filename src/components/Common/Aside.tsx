import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const AsideWrapper = styled.aside`
  position: sticky;
  top: 90px;
  height: calc(100vh - 90px);
`

const Aside: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <AsideWrapper>
        { children }
    </AsideWrapper>
  )
}

export default Aside