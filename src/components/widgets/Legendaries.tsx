// inv_artifact_xp02
import React, {useContext} from "react";
import styled from "styled-components";
import theme from "../theme";
import {ClassName, LegendaryType} from "../types";
import Legendary from "./Legendary";
import Icon from "../common/Icon";
import filterContext from "../../state/filterContext";

const COLOR_LEGENDARY = '#ff8000';
type Props = {
    data: LegendaryType[],
    className: ClassName,
}

const Legendaries = (props: Props) => {
    const {filter} = useContext(filterContext(props.className));
    const legendaries = filter ? props.data.filter(legendary => legendary.specs.includes(filter)) : props.data;
    if (legendaries.length === 0) return <></>;

    return <Container>
        <Header background={'#222'}>
            <Icon icon={'inv_artifact_xp02.jpg'} color={COLOR_LEGENDARY} />
            <HeaderText>Legendaries</HeaderText>
        </Header>
        <Content>
            {legendaries.map(legendary => <Legendary
                key={legendary.id}
                data={legendary}
                className={props.className}
            />)}
        </Content>
    </Container>
}

export default Legendaries;


const Container = styled.div`
    max-width: 1024px;
`;


const Header = styled.div<{ background: string }>`
    padding: 4px;
    width: calc(100% - 8px);
    background: ${props => props.background};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 54px;
`

const HeaderText = styled.div`
    color: ${COLOR_LEGENDARY};
    margin-left: 8px;
    font-family: ${theme.font.title};
    font-size: 2em;
`;

const Content = styled.div`
    margin: 8px;
    display: flex;
    padding: 16px;
    flex-direction: column;
    background: ${theme.color.background};
`;
