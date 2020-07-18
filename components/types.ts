export type ConduitType = {
    id: string,
    name: string,
    icon: string,
    type: 'potency' | 'finesse' | 'endurance' | 'unknown',
    specs: string[],
    notes: string[],
    description: string
}
