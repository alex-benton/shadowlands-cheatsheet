import React from "react";
import styled from "styled-components";
import theme from "../theme";
import {ClassName, CovenantAbilityType, CovenantName} from "../types";
import {COVENANT_KYRIAN, COVENANT_NECROLORD, COVENANT_NIGHTFAE, COVENANT_VENTHYR} from "../constants";
import {map} from "lodash";
import Icon from "../common/Icon";
import Covenant from "./Covenant";

type Props = {
    data: CovenantAbilityType[],
    filter?: string,
    className: ClassName,
}

const COVENANT_CATEGORY_SIGNATURE = 'signature';
const COVENANT_CATEGORY_COMBAT = 'combat';

const COVENANTS = {
    [COVENANT_NIGHTFAE]: {
        name: 'Night Fae',
        color: 'rgb(120 197 255)'
    },
    [COVENANT_VENTHYR]: {
        name: 'Venthyr',
        color: 'rgb(234 125 125)'
    },
    [COVENANT_NECROLORD]: {
        name: 'Necrolord',
        color: 'rgb(193 145 228)'
    },
    [COVENANT_KYRIAN]: {
        name: 'Kyrian',
        color: 'rgb(173 137 86)'
    }
}

const Covenants = (props: Props) => {
    const categorized = props.data.reduce<Record<'nightfae' | 'venthyr' | 'necrolord' | 'kyrian', Record<'signature' | 'combat', CovenantAbilityType[]>>>((acc, val) => {
        acc[val.covenant][val.type].push(val);
        return acc;
    }, {
        [COVENANT_KYRIAN]: {
            [COVENANT_CATEGORY_SIGNATURE]: [],
            [COVENANT_CATEGORY_COMBAT]: [],
        },
        [COVENANT_VENTHYR]: {
            [COVENANT_CATEGORY_SIGNATURE]: [],
            [COVENANT_CATEGORY_COMBAT]: [],
        },
        [COVENANT_NECROLORD]: {
            [COVENANT_CATEGORY_SIGNATURE]: [],
            [COVENANT_CATEGORY_COMBAT]: [],
        },
        [COVENANT_NIGHTFAE]: {
            [COVENANT_CATEGORY_SIGNATURE]: [],
            [COVENANT_CATEGORY_COMBAT]: [],
        },
    });

    return <Container>
        <Header>
            <CategoryHeader background={'#222'}>
                <Icon icon={'covenant_abilities.jpg'} color={'#222'} />
                <HeaderText>Covenant abilities</HeaderText>
            </CategoryHeader>
        </Header>
        <Content>
            {map(categorized, (abilities, name: CovenantName) => <Category key={name} covenant={name}
                                                                           abilities={abilities}
                                                                           wowClassName={props.className}/>)}
        </Content>
    </Container>;
}

export default Covenants;

const Container = styled.div`
    max-width: 1024px;
`;

const Header = styled.div`
    margin-top: 8px;
`;

const HeaderText = styled.div`
    margin-left: 8px;
    font-family: ${theme.font.title};
    font-size: 2em;
    color: white;
`;

const Content = styled.div`
    padding: 8px;
`;

type CategoryProps = {
    covenant: CovenantName,
    abilities: Record<'signature' | 'combat', CovenantAbilityType[]>
    wowClassName: ClassName,
}

const Category = (props: CategoryProps) => {
    const category = COVENANTS[props.covenant];
    return <CategoryContainer>
        <CategoryHeader background={category.color}>
            <Icon covenantName={props.covenant} color={category.color}/>
            <CategoryHeaderText>{category.name}</CategoryHeaderText>
        </CategoryHeader>
        <CategoryContent>
            {props.abilities.signature.map(ability => <Covenant
                color={category.color}
                key={ability.id}
                data={ability}
                wowClassName={props.wowClassName}
            />)}
            {props.abilities.combat.map(ability => <Covenant
                color={category.color}
                key={ability.id}
                data={ability}
                wowClassName={props.wowClassName}
            />)}
        </CategoryContent>
    </CategoryContainer>;
}

const CategoryContainer = styled.div`
    background: ${theme.color.background};
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;

const CategoryHeader = styled.div<{ background: string }>`
    color: #222;
    padding: 4px;
    width: calc(100% - 8px);
    background: ${props => props.background};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 54px;
`

const CategoryHeaderText = styled.div`
    margin-left: 8px;
    font-family: ${theme.font.title};
    font-size: 1.75em;
`;

const CategoryContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
`;
