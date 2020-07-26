import React from "react";
import styled from "styled-components";
import theme, {ClassName} from "../theme";
import {ConduitType} from "../types";
import {formatDescription} from "./common";
import Icon from "../common/Icon";

type Props = {
    className: ClassName,
    meta: {
        name: string,
        icon: string,
        color: string
    },
    data: ConduitType,
    filter?: string,
}

const Conduit = (props: Props) => {
    return <Container>
        <IconContainer>
            <Icon icon={props.data.icon} color={props.meta.color} />
        </IconContainer>
        <ConduitName color={props.meta.color}>
            {props.data.name}
        </ConduitName>
        <ConduitText>
            <ConduitDescription>{formatDescription(props.data.id, props.data.description, props.className, props.meta.color).items}</ConduitDescription>
            {props.data.notes && props.data.notes.length ? <ConduitNotes>{props.data.notes}</ConduitNotes> : null}
        </ConduitText>
    </Container>;
}

export default Conduit;

const Container = styled.div`
    background: ${theme.color.background};
    display: flex;
    margin: 4px;
    width: calc(100% - 8px);
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ConduitName = styled.div<{ color: string }>`
    display: flex;
    padding: 4px 8px;
    color: ${props => props.color};
    font-weight: bold;
    width: 150px;
    flex-shrink: 0;
    align-self: center;
    justify-content: center;
    text-align: center;
`

const ConduitText = styled.div`
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ConduitDescription = styled.div`
    color: white;
    align-self: center;
    display: inline;
`;

const ConduitNotes = styled.div`
    margin-top: 4px;
    font-size: 14px;
    color: yellow;
    display: inline;
`;
