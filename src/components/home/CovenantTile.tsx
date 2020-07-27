import React from "react";
import styled from "styled-components";
import Icon from "../common/Icon";
import {CovenantName} from "../types";

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

const CovenantIcon = (props: Props) => <StyledIcon covenantName={props.covenantName} size={130} />

const StyledIcon = styled(Icon)`
    border-radius: 50%;
`;
