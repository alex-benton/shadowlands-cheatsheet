import React from "react";
import styled from "styled-components";
import theme, {ClassName} from "../theme";

type Props = {
    className: ClassName,
}
const ClassTile = (props: Props) => <Container>
    <ClassIcon className={props.className}/>
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

type IconProps = {
    className: ClassName,
};

const ClassIcon = (props: IconProps) => <IconContainer className={props.className}>
    <IconImage className={props.className}/>
</IconContainer>

const IconContainer = styled.div<IconProps>`
    background-color: ${props => theme.color.classes[props.className]};
    border-radius: 10%;
    padding: 4px;
`;

const IconImage = styled.div<IconProps>`
    background-image: url('/assets/${props => props.className}.png');
    height: 130px;
    width: 130px;
    border-radius: 25%;
`;
