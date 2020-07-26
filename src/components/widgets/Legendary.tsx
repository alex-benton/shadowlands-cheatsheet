import React from "react";
import theme, {ClassName} from "../theme";
import {LegendaryType} from "../types";
import {formatDescription} from "./common";
import styled from "styled-components";
import Icon from "../common/Icon";

const COLOR_LEGENDARY = '#ff8000';

type Props = {
    className: ClassName,
    data: LegendaryType,
    filter?: string,
}

const Legendary = (props: Props) => {
    return <Container>
        <IconContainer>
            <Icon icon={props.data.icon} color={COLOR_LEGENDARY} />
        </IconContainer>
        <LegendaryName color={COLOR_LEGENDARY}>
            <div>{props.data.name}</div>
            <LegendarySlots>{props.data.slots.join(", ")}</LegendarySlots>
        </LegendaryName>
        <LegendaryDescription>{formatDescription(props.data.id, props.data.description, props.className, COLOR_LEGENDARY).items}</LegendaryDescription>
    </Container>;
};

export default Legendary;


const Container = styled.div`
    background: ${theme.color.background};
    display: flex;
    margin: 4px;
    width: calc(100% - 8px);
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LegendaryName = styled.div<{ color: string }>`
    padding: 4px 8px;
    color: ${props => props.color};
    font-weight: bold;
    width: 150px;
    flex-shrink: 0;
    align-self: center;
    text-align: center;
`

const LegendarySlots = styled.div`
    font-weight: lighter;
    font-size: 14px;
    color: white;
    
`

const LegendaryDescription = styled.div`
    color: white;
    align-self: center;
    display: inline;
`;
