import React from "react";
import fs from "fs";
import path from "path";
import Conduits from "../../components/widgets/Conduits";
import {ConduitType, CovenantAbilityType, LegendaryType} from "../../components/types";
import {CLASS_NAMES} from "../../components/constants";
import {ClassName} from "../../components/theme";
import Legendaries from "../../components/widgets/Legendaries";
import PageHeader from "../../components/common/PageHeader";
import Covenants from "../../components/widgets/Covenants";
import styled from "styled-components";
import {isEmpty} from "lodash";

type Props = {
    wowClassName: ClassName,
    data: {
        covenants: CovenantAbilityType[],
        conduits: ConduitType[],
        legendaries: LegendaryType[],
    }
}

const ClassPage = (props: Props) => {
    return <div>
        <PageHeader wowClassName={props.wowClassName}/>
        <Container>
            <Covenants
                data={props.data.covenants}
                className={props.wowClassName}
            />
            {!isEmpty(props.data.legendaries) ? <Legendaries
                data={props.data.legendaries}
                className={props.wowClassName}
            /> : null}
            {!isEmpty(props.data.conduits) ? <Conduits
                data={props.data.conduits}
                className={props.wowClassName}
            /> : null}
        </Container>
    </div>;
};

export default ClassPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export async function getStaticProps({params}: { params: { className: string } }) {
    const conduitPath = path.join(process.cwd(), 'data', params.className, 'conduits.json');
    let conduits;
    try {
        // @ts-ignore
        conduits = JSON.parse(fs.readFileSync(conduitPath));
    } catch {
        conduits = []
    }

    const legendaryPath = path.join(process.cwd(), 'data', params.className, 'legendaries.json');
    let legendaries;
    try {
        // @ts-ignore
        legendaries = JSON.parse(fs.readFileSync(legendaryPath));
    } catch {
        legendaries = []
    }

    const covenantPath = path.join(process.cwd(), 'data', params.className, 'covenants.json');
    let covenants;
    try {
        // @ts-ignore
        covenants = JSON.parse(fs.readFileSync(covenantPath));
    } catch {
        covenants = []
    }
    return {
        props: {
            wowClassName: params.className,
            data: {
                covenants: covenants,
                conduits: conduits,
                legendaries: legendaries,
            }
        }
    }
}

export async function getStaticPaths() {
    const paths = CLASS_NAMES.map(name => ({
        params: {
            className: name
        }
    }));

    return {
        paths,
        fallback: false
    };
}
