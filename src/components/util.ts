import path from "path";
import {ClassName} from "./theme";
import {ConduitType, CovenantAbilityType, LegendaryType} from "./types";

export const urlPrefix = (url: string) : string => process.env.URL_PREFIX ? path.join(process.env.URL_PREFIX, url) : url;


/**
 * The type definition for class page data.
 */
export type ClassData = {
    wowClassName: ClassName,
    data: {
        covenants: CovenantAbilityType[],
        conduits: ConduitType[],
        legendaries: LegendaryType[],
    }
}

/**
 * Build the data object for the provided class name.
 *
 * Loads JSON data files from '/data/{classname}' and turns them into a data object. This function
 * must be called at build time!
 *
 * @param fs the node fs module.
 * @param wowClassName the class name to build data for.
 * @returns
 */
export const buildClassData = (fs: typeof import("fs"), wowClassName: ClassName): ClassData => {
    // load conduit data
    const conduitPath = path.join(process.cwd(), 'data', wowClassName, 'conduits.json');
    let conduits;
    try {
        // @ts-ignore
        conduits = JSON.parse(fs.readFileSync(conduitPath));
    } catch {
        conduits = []
    }

    // load legendaries
    const legendaryPath = path.join(process.cwd(), 'data', wowClassName, 'legendaries.json');
    let legendaries;
    try {
        // @ts-ignore
        legendaries = JSON.parse(fs.readFileSync(legendaryPath));
    } catch {
        legendaries = []
    }

    // load covenant abilities
    const covenantPath = path.join(process.cwd(), 'data', wowClassName, 'covenants.json');
    let covenants;
    try {
        // @ts-ignore
        covenants = JSON.parse(fs.readFileSync(covenantPath));
    } catch {
        covenants = []
    }

    return {
        wowClassName,
        data: {
            conduits,
            covenants,
            legendaries
        }
    }
};
