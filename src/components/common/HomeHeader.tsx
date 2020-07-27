import styled from "styled-components";
import theme from "../theme";
import React from "react";
import Icon from "./Icon";

/**
 * The HomeHeader component.
 *
 * This header appears on the index page. It tells you the name of this website.
 */
const HomeHeader = () => {
    return <Container>
        <IconContainer>
            <Icon icon={'inv_revendreth'} color={'white'} size={36}/>
        </IconContainer>
        <Text>Shadowlands Cheatsheet</Text>
        <IconContainer/>
    </Container>
}

export default HomeHeader;

const Container = styled.div`
    background: ${theme.color.background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    width: calc(100% - 8px);
    height: 48px;
    position: absolute;
    filter: drop-shadow(1px 1px 4px black);
    top: 0;
`;

const IconContainer = styled.div`
    padding: 4px 8px;
    width: 50px;
    display: flex;
`;

const Text = styled.div`
    font-family: ${theme.font.title};
    color: white;
    font-size: 2em;
`;
