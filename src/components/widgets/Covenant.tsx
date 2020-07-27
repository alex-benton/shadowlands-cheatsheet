import React from "react";
import styled from "styled-components";
import theme from "../theme";
import {ClassName, CovenantAbilityType} from "../types";
// import {formatDescription} from "./common";
import Icon from "../common/Icon";
import {formatDescription} from "./common";

type Props = {
    wowClassName: ClassName,
    data: CovenantAbilityType,
    color: string,
    filter?: string,
}

const Covenant = (props: Props) => {
    const parseRange = (range: string) => {
        const result = /(\d+) yards/.exec(range);
        if (result && result[1] && parseInt(result[1]) > 0) return result[1];
        return null;
    }

    const parseCooldown = (cooldown: string) => {
        if (cooldown === 'n/a') return null;
        if (cooldown && cooldown.endsWith('s')) {
            return cooldown.substring(0, cooldown.length - 1);
        }
        return cooldown;
    }

    const parseCast = (cast: string) => {
        if (!cast) return null;
        if (cast === 'Channeled' || cast === 'Instant') return cast;
        if (cast && cast.endsWith('s')) {
            return `${cast.substring(0, cast.length - 1)} cast`;
        }
        return `${cast} cast`;
    }

    const range = parseRange(props.data.range);
    const cooldown = parseCooldown(props.data.cooldown);
    const cast = parseCast(props.data.cast_time);
    return <Container>
        <IconContainer>
            <Icon size={64} icon={props.data.icon} color={props.color}/>
        </IconContainer>
        <Content>
            <div>
                <CovenantName color={'white'}>
                    <AbilityName>{props.data.name}</AbilityName>
                    <AbilityData>
                        {props.data.cost && props.data.cost !== 'None' ? <div>{props.data.cost}</div> : null}
                        {range ? <div>{`${range} yard range`}</div> : null}
                    </AbilityData>
                    <AbilityData>
                        {cast ? <div>{`${cast}`}</div> : null}
                        {cooldown ? <div>{`${cooldown} cooldown`}</div> : null}
                    </AbilityData>
                </CovenantName>
            </div>
            <CovenantText>
                <CovenantDescription>{formatDescription(props.data.id, props.data.description, props.wowClassName, props.color, null, true).items}</CovenantDescription>
            </CovenantText>
        </Content>
    </Container>;
}

export default Covenant;

const Container = styled.div`
    display: grid;
    grid-template-columns: 68px 1fr;
    margin: 4px;
    width: calc(100% - 8px);
    align-items: start;
    grid-gap: 8px;
    
`;

const Content = styled.div`
    padding: 8px;
    min-height: 68px;
    background: ${theme.color.background};
    border-radius: 5px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CovenantName = styled.div<{ color: string }>`
    padding: 4px;
    color: ${props => props.color};
`

const AbilityName = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

const AbilityData = styled.div`
    font-weight: lighter;
    display: flex;
    justify-content: space-between;
`;


const CovenantText = styled.div`
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CovenantDescription = styled.div`
    color: white;
    display: inline;
`;

/*
const CovenantNotes = styled.div`
    margin-top: 4px;
    font-size: 14px;
    color: yellow;
    display: inline;
`;
*/
