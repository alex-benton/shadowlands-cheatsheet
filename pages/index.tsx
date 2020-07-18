import React from 'react';
import styled from 'styled-components';
import ClassTile from "../components/home/ClassTile";
import CovenantTile from "../components/home/CovenantTile";
import theme from "../components/theme";
import Link from "next/link";
import {CLASS_NAMES} from "../components/constants";

const Home = () => (
    <Container>
        <Classes/>
        <Covenants/>
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
        {CLASS_NAMES.map(name => <Link key={name} href={`/classes/${name}`}>
            <div>
                <ClassTile className={name} />
            </div>
        </Link>)}
    </Content>
</ClassContainer>

const Covenants = () => <ClassContainer>
    <Content>
        <CovenantTile covenantName={"kyrian"}/>
        <CovenantTile covenantName={"venthyr"}/>
        <CovenantTile covenantName={"nightfae"}/>
        <CovenantTile covenantName={"necrolord"}/>
    </Content>
</ClassContainer>
