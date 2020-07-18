import React from "react";
import styled from "styled-components";
import theme, {ClassName} from "../theme";
import {ConduitType} from "../types";
import Conduit from "./Conduit";

type Props = {
    data: ConduitType[],
    filter?: string,
    className: ClassName,
}

const CONDUIT_CATEGORY_POTENCY = 'potency';
const CONDUIT_CATEGORY_ENDURANCE = 'endurance';
const CONDUIT_CATEGORY_FINESSE = 'finesse';

const CONDUIT_CATEGORIES = {
    [CONDUIT_CATEGORY_POTENCY]: {
        name: 'Potency',
        icon: 'inv_misc_uncutgemnormal3.jpg',
        color: 'rgb(215, 121, 177)',
    },
    [CONDUIT_CATEGORY_ENDURANCE]: {
        name: 'Endurance',
        icon: 'inv_misc_uncutgemnormal2.jpg',
        color: 'rgb(146, 246, 244)',
    },
    [CONDUIT_CATEGORY_FINESSE]: {
        name: 'Finesse',
        icon: 'inv_misc_uncutgemnormal5.jpg',
        color: 'rgb(227, 227, 152)',
    }
}

const Conduits = (props: Props) => {
    const categorized = props.data.reduce<Record<'potency' | 'endurance' | 'finesse' | 'unknown', ConduitType[]>>((acc, val) => {
        if (!props.filter || val.specs.includes(props.filter)) {
            acc[val.type].push(val);
        }
        return acc;
    }, {
        [CONDUIT_CATEGORY_POTENCY]: [],
        [CONDUIT_CATEGORY_ENDURANCE]: [],
        [CONDUIT_CATEGORY_FINESSE]: [],
        unknown: []
    });

    return <Container>
        <Category
            category={CONDUIT_CATEGORY_POTENCY}
            data={categorized[CONDUIT_CATEGORY_POTENCY]}
            className={props.className}
        />
        <Category
            category={CONDUIT_CATEGORY_ENDURANCE}
            data={categorized[CONDUIT_CATEGORY_ENDURANCE]}
            className={props.className}
        />
        <Category
            category={CONDUIT_CATEGORY_FINESSE}
            data={categorized[CONDUIT_CATEGORY_FINESSE]}
            className={props.className}
        />
    </Container>;
}

export default Conduits;

const Container = styled.div`
    background: ${theme.color.background};
    max-width: 1024px;
`;

type CategoryProps = {
    category: 'potency' | 'endurance' | 'finesse',
    data: ConduitType[],
    className: ClassName,
}

const Category = (props: CategoryProps) => {
    const category = CONDUIT_CATEGORIES[props.category];
    return <CategoryContainer>
        <CategoryHeader background={category.color}>
            <IconContainer color={category.color}>
                <CategoryIcon icon={category.icon}/>
            </IconContainer>
            <CategoryHeaderText>{category.name}</CategoryHeaderText>
        </CategoryHeader>
        <CategoryContent>
            {props.data.map(conduit => <Conduit
                key={conduit.id}
                data={conduit}
                meta={category}
                className={props.className}
            />)}
        </CategoryContent>
    </CategoryContainer>;
}

const CategoryContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
`;

const CategoryHeader = styled.div<{ background: string }>`
    padding: 4px;
    width: calc(100% - 8px);
    background: ${props => props.background};
    display: flex;
    align-items: center;
    border-radius: 4px;
`

const CategoryHeaderText = styled.div`
    margin-left: 8px;
    font-family: ${theme.font.title};
    font-size: 1.75em;
`;

const IconContainer = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    border-radius: 10%;
    padding: 2px;
`;

const CategoryIcon = styled.div<{ icon: string }>`
    background: url('/assets/icons/${props => props.icon}');
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25%;
`;

const CategoryContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
`;
