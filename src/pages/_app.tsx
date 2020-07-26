import {AppProps} from 'next/app';
import * as React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";
import Head from "next/head";
import theme from "../components/theme";
import {urlPrefix} from "../components/util";

/**
 * Use the 'styled-components' global style mechanism to style the 'body' and default '__next' entrypoint div.
 *
 * See also: https://styled-components.com/docs/api#createglobalstyle
 */
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    
    background-color: #222;
    background-image: url('${urlPrefix(`/spooky.jpg`)}');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    
    overflow: hidden;
  }
  
  #__next {
    overflow: auto;
    height: 100vh;
  }
  
  a {
    text-decoration: inherit;
  }
  
  a:-webkit-any-link {
    color: inherit;
  }
`;

/**
 * The app component.
 *
 * Because this file is named '_app', through nextjs magic this will be rendered for each page. The 'Component'
 * component is the actual 'page' that's being rendered.
 *
 * @param Component provided by nextjs. The 'page' that's going to be rendered.
 * @param pageProps provided by nextjs. The props to be passed to the page.
 */
const App = ({Component, pageProps}: AppProps) => (<ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href={urlPrefix(`/apple-touch-icon.png`)}/>
            <link rel="icon" type="image/png" sizes="32x32" href={urlPrefix(`/favicon-32x32.png`)}/>
            <link rel="icon" type="image/png" sizes="16x16" href={urlPrefix(`/favicon-16x16.png`)}/>
            <link rel="manifest" href={urlPrefix(`/site.webmanifest`)}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:wght@300;400;600;700;800&family=Stalinist+One&display=swap"
                rel="stylesheet"
                key="google-fonts"
            />
            <title>shadowlands tools</title>
        </Head>
        <Content>
            <Component {...pageProps} />
        </Content>
    </ThemeProvider>);

export default App;

const Content = styled.div`
    overflow-x: auto;
`;
