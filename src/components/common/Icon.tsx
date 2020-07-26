import styled from "styled-components";
import React from "react";
import theme, {ClassName, CovenantName} from "../theme";
import {urlPrefix} from "../util";

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
        if (props.icon) return `/assets/icons/${!props.icon.endsWith('.jpg') ? `${props.icon}.jpg` : props.icon}`;
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

const Content = styled.div<{ icon: string, size: number }>`
    background: url('${props => urlPrefix(props.icon)}');
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25%;
`;
