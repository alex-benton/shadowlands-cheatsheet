export type ConduitType = {
    id: string,
    name: string,
    icon: string,
    type: 'potency' | 'finesse' | 'endurance' | 'unknown',
    specs: string[],
    notes: string[],
    description: string
}

export type LegendaryType = {
    id: string,
    name: string,
    icon: string,
    slots: string[],
    specs: string[],
    notes: string[],
    description: string
}

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

/*

  {
    "id": "324739",
    "icon": "ability_kyrian_summonsteward",
    "name": "Summon Steward",
    "duration": "3 minutes",
    "cost": "None",
    "range": "0 yards (Self)",
    "cast_time": "Instant",
    "cooldown": "5 minutes",
    "description": "Call your steward to bring you a Phial of Serenity that can be consumed to restore 15% health and remove all Curse, Disease, Poison, and Bleed effects.\n\nYour Steward additionally offers access to a selection of useful amenities, each once per day.",
    "type": "signature",
    "covenant": "kyrian"
  },
 */
