//
// Module containing type information for various objects used within the app.
//

/**
 * Data type representing a 'conduit'.
 */
export type ConduitType = {
    id: string,
    name: string,
    icon: string,
    type: 'potency' | 'finesse' | 'endurance' | 'unknown',
    specs: string[],
    notes: string[],
    description: string
}

/**
 * Data type representing a 'legendary' effect.
 */
export type LegendaryType = {
    id: string,
    name: string,
    icon: string,
    slots: string[],
    specs: string[],
    notes: string[],
    description: string
}

/**
 * Data type representing a covenant ability.
 */
export type CovenantAbilityType = {
    id: string,
    name: string,
    icon: string,
    duration: string,
    cost: string,
    range: string
    cast_time: string,
    cooldown: string,
    description: string,
    type: 'combat' | 'signature',
    covenant: 'nightfae' | 'venthyr' | 'necrolord' | 'kyrian',
}

/**
 * Type representing a WoW class name string.
 */
export type ClassName =
    'deathknight'
    | 'demonhunter'
    | 'druid'
    | 'hunter'
    | 'mage'
    | 'monk'
    | 'paladin'
    | 'priest'
    | 'rogue'
    | 'shaman'
    | 'warlock'
    | 'warrior';

/**
 * Type representing a WoW covenant name string.
 */
export type CovenantName = 'kyrian' | 'venthyr' | 'nightfae' | 'necrolord';
