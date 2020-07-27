import React, {useContext} from "react";
import styled from "styled-components";
import theme from "../theme";
import Icon from "./Icon";
import {CLASS_DISPLAY_NAMES, CLASS_SPECS} from "../constants";
import AppLink from "./AppLink";
import {ClassName} from "../types";
import HeaderDropdown from "./HeaderDropdown";
import {reduce} from 'lodash';
import filterContext from "../../state/filterContext";

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
    const options = reduce<Record<string, { icon: string, display: string, key: string }>, Record<string, { icon: string, name: string, key: string, color: string }>>(CLASS_SPECS[props.wowClassName], (acc, spec) => {
        acc[spec.key] = {
            icon: spec.icon,
            name: spec.display,
            key: spec.key,
            color: theme.color.classes[props.wowClassName]
        };
        return acc;
    }, {})

    const {filter, setFilter} = useContext(filterContext(props.wowClassName));

    return <>
        <Container>
            <AppLink href={'/'}>
                <a>
                    <HomeContainer>
                        <Icon icon={'inv_revendreth'} color={'white'} size={36}/>
                        <Text color={'white'}>Home</Text>
                    </HomeContainer>
                </a>
            </AppLink>
            <HomeContainer>
                <Text color={'white'}> / </Text>
            </HomeContainer>
            <HomeContainer>
                <Icon wowClassName={props.wowClassName} size={36}/>
                <Text color={theme.color.classes[props.wowClassName]}>{CLASS_DISPLAY_NAMES[props.wowClassName]}</Text>
            </HomeContainer>
            <HomeContainer>
                <Text color={'white'}> - </Text>
            </HomeContainer>
            <HeaderDropdown
                selected={filter}
                placeholder={{name: 'Add a spec filter', color: '#999'}}
                options={options}
                onSelect={setFilter}
            />
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
    height: 48px;
    filter: drop-shadow(1px 1px 4px black);
`;

const Placeholder = styled.div`
    height: 56px;
`;

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 8px;
    
    :hover {
        filter: brightness(1.25);
    }
    
    :active {
        filter: brightness(.8);
    }
`;

const Text = styled.div<{ color: string }>`
    margin-left: 8px;
    font-family: ${theme.font.title};
    color: ${props => props.color};
    font-size: 2em;
`;
