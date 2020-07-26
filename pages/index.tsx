import React from 'react';
import styled from 'styled-components';
import ClassTile from "../components/home/ClassTile";
// import CovenantTile from "../components/home/CovenantTile";
import theme from "../components/theme";
import {CLASS_NAMES} from "../components/constants";
import HomeHeader from "../components/common/HomeHeader";
import AppLink from "../components/common/AppLink";

const Home = () => (
    <Container>
        <HomeHeader/>
        <Classes/>
    </Container>
);

export default Home;

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    padding: 8px;
    background-color: ${theme.color.background};

    display: grid;
    grid-template-columns: min-content min-content min-content min-content;
    grid-gap: 8px;
    flex-wrap: wrap;
`;

const ClassContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Classes = () => <ClassContainer>
    <Content>
        {CLASS_NAMES.map(name => <AppLink key={name} href={`/classes/${name}`}>
            <a>
                <ClassTile className={name} />
            </a>
        </AppLink>)}
    </Content>
</ClassContainer>

/*
const Covenants = () => <ClassContainer>
    <Content>
        <CovenantTile covenantName={"kyrian"}/>
        <CovenantTile covenantName={"venthyr"}/>
        <CovenantTile covenantName={"nightfae"}/>
        <CovenantTile covenantName={"necrolord"}/>
    </Content>
</ClassContainer>
*/
