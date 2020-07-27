import React from 'react';
import styled from 'styled-components';
import ClassTile from "../components/home/ClassTile";
import theme from "../components/theme";
import {CLASS_NAMES} from "../components/constants";
import HomeHeader from "../components/common/HomeHeader";
import AppLink from "../components/common/AppLink";
import Footer from "../components/common/Footer";

/**
 * The index page.
 */
const Index = () => (
    <>
        <Container>
            <HomeHeader/>
            <Content>
                <Classes/>
            </Content>
        </Container>
        <Footer />
    </>
);

export default Index;

/**
 * The index page container, which takes up the entire screen.
 */
const Container = styled.div`
    height: 100vh;
`;

/**
 * The index page content, which takes up the space not occupied by the header.
 */
const Content = styled.div`
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

/**
 * A collection of class tiles, which link to individual class pages.
 */
const Classes = () => <ClassContainer>
    <ClassContent>
        {CLASS_NAMES.map(name => <AppLink key={name} href={`/classes/${name}`}>
            <a>
                <ClassTile className={name} />
            </a>
        </AppLink>)}
    </ClassContent>
</ClassContainer>

/**
 * The container div for the class tiles.
 */
const ClassContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

/**
 * The content div for the class tiles.
 */
const ClassContent = styled.div`
    padding: 8px;
    background-color: ${theme.color.background};

    display: grid;
    grid-template-columns: min-content min-content min-content min-content;
    grid-gap: 8px;
    flex-wrap: wrap;
`;
