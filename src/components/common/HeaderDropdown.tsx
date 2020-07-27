import styled from "styled-components";
import theme from "../theme";
import React, {useState} from "react";
import Icon from "./Icon";
import {map} from "lodash";

/**
 * Defines the props accepted by the HeaderDropdown component.
 */
type Props = {
    iconSize?: number,
    options: Record<string, Option>,
    placeholder: Option,
    selected?: string,
    onSelect: (key: string | undefined) => any,
}

type Option = {
    icon?: string,
    name: string,
    color: string,
}

const HeaderDropdown = ({iconSize, selected, options, placeholder, onSelect}: Props) => {
    const [isActive, setActive] = useState(false);
    const option = selected !== null && selected !== undefined ? options[selected] : placeholder;
    return <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
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
                                                         onSelect={() => onSelect(i)}
            />)}
            {selected && <DropdownOption
                key={'unselect'}
                color={'#999'}
                name={'Clear selection'}
                iconSize={iconSize}
                onSelect={() => {
                    onSelect(undefined);
                    setActive(false);
                }}
            />}
        </OptionContainer>}
    </div>
}

HeaderDropdown.defaultProps = {
    iconSize: 36,
}

export default HeaderDropdown;

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

const OptionContainer = styled.div`
`;

type DropdownOptionProps = Option & {
    iconSize?: number,
    onSelect: () => any,
}

const DropdownOption = ({icon, name, color, iconSize, onSelect}: DropdownOptionProps) => {
    return <DropdownOptionContainer onClick={onSelect}>
        <HomeContainer>
            <Icon icon={icon} color={color} size={iconSize}/>
            <Text color={color}>
                {name}
            </Text>
        </HomeContainer>
    </DropdownOptionContainer>;
}


const DropdownOptionContainer = styled.div`
    background: #222;
`;
