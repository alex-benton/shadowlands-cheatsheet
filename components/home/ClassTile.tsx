import React from "react";
import styled from "styled-components";
import {ClassName} from "../theme";
import Icon from "../common/Icon";

type Props = {
    className: ClassName,
}
const ClassTile = (props: Props) => <Container>
    <Icon wowClassName={props.className} size={130}/>
</Container>;

export default ClassTile;

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
