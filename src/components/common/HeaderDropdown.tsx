import styled from "styled-components";
import theme from "../theme";
import React, {useState} from "react";
import Icon from "./Icon";
import {map} from "lodash";
import AppLink from "./AppLink";

/**
 * Defines the props accepted by the HeaderDropdown component.
 */
type Props = {
    iconSize?: number,
    options: Record<string, Option>,
    placeholder: Option,
    selected?: string,
    onSelect?: (key: string | undefined) => any,
    clearable?: boolean,
}

type Option = {
    icon?: string,
    name: string,
    color: string,
    link?: string,
}

const HeaderDropdown = ({iconSize, selected, options, placeholder, onSelect, clearable}: Props) => {
    const [isActive, setActive] = useState(false);
    const option = selected !== null && selected !== undefined ? options[selected] : placeholder;
    return <Container onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <HomeContainer>
            <Icon icon={option.icon} color={option.color} size={iconSize}/>
            <Text color={option.color}>
                {option.name}
            </Text>
        </HomeContainer>
        {isActive && <OptionContainer>
            {map(options, (option, i) => <DropdownOption key={i}
                                                         color={i !== selected ? '#999' : option.color}
                                                         name={option.name}
                                                         icon={option.icon}
                                                         iconSize={iconSize}
                                                         link={option.link}
                                                         onSelect={() => onSelect && onSelect(i)}
            />)}
            {selected && clearable && <DropdownOption
                key={'unselect'}
                color={'#999'}
                name={'Clear selection'}
                iconSize={iconSize}
                onSelect={() => {
                    onSelect && onSelect(undefined);
                    setActive(false);
                }}
            />}
        </OptionContainer>}
    </Container>
}

HeaderDropdown.defaultProps = {
    iconSize: 36,
    clearable: true,
}

export default HeaderDropdown;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const HomeContainer = styled.div`
    display: flex;
    height: 40px;
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

const OptionContainer = styled.div`
    position: absolute;
    top: 48px;
    padding: 8px 0;
`;

type DropdownOptionProps = Option & {
    iconSize?: number,
    onSelect: () => any,
}

const DropdownOption = ({icon, name, color, iconSize, onSelect, link}: DropdownOptionProps) => {
    const option = <DropdownOptionContainer onClick={onSelect}>
        <HomeContainer>
            <Icon icon={icon} color={color} size={iconSize}/>
            <Text color={color}>
                {name}
            </Text>
        </HomeContainer>
    </DropdownOptionContainer>;

    if (link) return <AppLink href={link}>{option}</AppLink>;
    return option;
}


const DropdownOptionContainer = styled.div`
    background: #222;
    cursor: pointer;
    padding-right: 8px;
`;
