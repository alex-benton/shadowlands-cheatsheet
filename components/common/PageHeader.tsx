import React from "react";
import styled from "styled-components";
import theme, {ClassName} from "../theme";
import Icon from "./Icon";
import Link from "next/link";
import {CLASS_DISPLAY_NAMES} from "../constants";

/**
 * Defines the props accepted by the PageHeader component.
 */
type Props = {
    wowClassName: ClassName
}

/**
 * The PageHeader component.
 *
 * This header appears above the 'classes' pages and displays a breadcrumb navigation menu. Also, this
 * header allows the user to select spec and covenant filters which apply to the class page.
 */
const PageHeader = (props: Props) => {
    return <>
        <Container>
            <Link href={'/'}>
                <a>
                    <HomeContainer>
                        <Icon icon={'inv_revendreth'} color={'white'} size={36}/>
                        <Text color={'white'}>Home</Text>
                    </HomeContainer>
                </a>
            </Link>
            <HomeContainer>
                <Text color={'white'}> / </Text>
            </HomeContainer>
            <HomeContainer>
                <Icon wowClassName={props.wowClassName} size={36} />
                <Text color={theme.color.classes[props.wowClassName]}>{CLASS_DISPLAY_NAMES[props.wowClassName]}</Text>
            </HomeContainer>
        </Container>
        <Placeholder/>
    </>;
}

export default PageHeader;

const Container = styled.div`
    background: #222;
    display: flex;
    padding: 4px;
    width: calc(100% - 8px);
    position: absolute;
`;

const Placeholder = styled.div`
    height: 56px;
`;

const HomeContainer = styled.div`
    display: flex;
    padding: 4px 8px;
    
    :hover {
        filter: brightness(1.25);
    }
    
    :active {
        filter: brightness(.8);
    }
`;

const Text = styled.div<{color: string}>`
    margin-left: 8px;
    font-family: ${theme.font.title};
    color: ${props => props.color};
    font-size: 2em;
`;
