import React from "react";
import styled from "styled-components";
import theme, {CovenantName} from "../theme";

type Props = {
    covenantName: CovenantName,
}
const CovenantTile = (props: Props) => <Container>
    <CovenantIcon covenantName={props.covenantName}/>
</Container>;

export default CovenantTile;

const Container = styled.div`
    cursor: pointer;
    display: flex;
    filter: drop-shadow(1px 1px 4px black);
    
    :hover {
        filter: brightness(1.25) drop-shadow(1px 1px 4px black);
    }
    
    :active {
        filter: brightness(.8);
    }
`;

type IconProps = {
    covenantName: CovenantName,
};

const CovenantIcon = (props: IconProps) => <IconContainer covenantName={props.covenantName}>
    <IconImage covenantName={props.covenantName}/>
</IconContainer>

const IconContainer = styled.div<IconProps>`
    background-color: ${props => theme.color.covenants[props.covenantName]};
    border-radius: 50%;
    padding: 4px;

`;

const IconImage = styled.div<IconProps>`
    background-image: url('/assets/${props => props.covenantName}.png');
    height: 130px;
    width: 130px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
