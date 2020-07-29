import styled from "styled-components";
import React from "react";
import theme from "../theme";
import {urlPrefix} from "../util";
import {ClassName, CovenantName} from "../types";
import {CLASS_NAMES} from "../constants";

type Props = {
    icon?: string,
    wowClassName?: ClassName,
    covenantName?: CovenantName,
    size: number,
    color?: string,
    className?: string,
}

const Icon = (props: Props) => {
    const determineIcon = () => {
        if (props.wowClassName) return `/assets/${props.wowClassName}.png`;
        if (props.covenantName) return `/assets/${props.covenantName}.png`;
        if (props.icon) {
            if (CLASS_NAMES.includes(props.icon as ClassName)) return `/assets/${props.icon}.png`;
            return `/assets/icons/${!props.icon.endsWith('.jpg') ? `${props.icon}.jpg` : props.icon}`;
        }
        return `/assets/icons/inv_misc_questionmark.jpg`;
    };
    const color = props.color ? props.color : props.wowClassName ? theme.color.classes[props.wowClassName] : props.covenantName ? theme.color.covenants[props.covenantName] : 'black';
    const icon = determineIcon();
    const borderSize = Math.max(2, Math.floor(props.size / 24));
    return <Container
        className={props.className}
        color={color}
        padding={borderSize}
    >
        <Content icon={icon} size={props.size}/>
    </Container>;
}

Icon.defaultProps = {
    icon: 'inv_misc_questionmark',
    size: 50
}

export default Icon;

const Container = styled.div<{ color: string, padding: number }>`
    background-color: ${props => props.color};
    border-radius: 10%;
    padding: ${props => props.padding}px;
`;

const Content = styled.div.attrs<{ icon: string, size: number }>(props => ({
    style: {
        backgroundImage: `url(${urlPrefix(props.icon)})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: `${props.size}px`,
        width: `${props.size}px`,
    }
}))<{ icon: string, size: number }>`
    border-radius: 25%;
`;
