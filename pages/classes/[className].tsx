import React from "react";
import fs from "fs";
import path from "path";
import Conduits from "../../components/widgets/Conduits";
import {ConduitType} from "../../components/types";
import {CLASS_NAMES} from "../../components/constants";
import {ClassName} from "../../components/theme";

type Props = {
    className: ClassName,
    data: {
        conduits: ConduitType[],
    }
}

const ClassPage = (props: Props) => {
    return <div>
        <Conduits
            data={props.data.conduits}
            className={props.className}
        />
    </div>;
};

export default ClassPage;


export async function getStaticProps({ params }: {params: {className: string}}) {
    const conduitPath = path.join(process.cwd(), 'data', params.className, 'conduits.json');
    let conduits;
    try {
        // @ts-ignore
        conduits = JSON.parse(fs.readFileSync(conduitPath));
    } catch {
        conduits = []
    }

    return {
        props: {
            className: params.className,
            data: {
                conduits: conduits
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
