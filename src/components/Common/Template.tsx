import React, { FunctionComponent, ReactNode } from "react";
import { Helmet } from 'react-helmet';
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import Main from "components/Common/Main";
import { TabType } from "../../types/Tab.types";

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  tabType: TabType;
  children: ReactNode;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  tabType,
  children,
}) {


    return (
        <Container id="wrap">
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />

              <meta property="og:type" content="website" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={image} />
              <meta property="og:url" content={url} />
              <meta property="og:site_name" content={title} />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={image} />
              <meta name="twitter:site" content="kodooui" />
              <meta name="twitter:creator" content="kodooui" />

              <meta name="google-site-verification" content="z248EgOXHmls3k1Vo_GYmt1P9rnVs2kt8kqQhccGB20" />
              <meta name="naver-site-verification" content="8d88e79b580f7d70d5656a174363f3192090372c" />

              <html lang="ko" />
            </Helmet>

            <GlobalStyle />

            <Header tab={tabType} />
            <Main>
              { children }
            </Main>
            <Footer />
        </Container>
    )
}

export default Template