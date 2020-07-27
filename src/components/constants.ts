//
// Module containing constant values.
//
import {ClassName} from "./types";

export const CLASS_NAME_DEATHKNIGHT = 'deathknight';
export const CLASS_NAME_DEMONHUNTER = 'demonhunter';
export const CLASS_NAME_DRUID = 'druid';
export const CLASS_NAME_HUNTER = 'hunter';
export const CLASS_NAME_MAGE = 'mage';
export const CLASS_NAME_MONK = 'monk';
export const CLASS_NAME_PALADIN = 'paladin';
export const CLASS_NAME_PRIEST = 'priest';
export const CLASS_NAME_ROGUE = 'rogue';
export const CLASS_NAME_SHAMAN = 'shaman';
export const CLASS_NAME_WARLOCK = 'warlock';
export const CLASS_NAME_WARRIOR = 'warrior';

/**
 * A set containing each WoW class name.
 */
export const CLASS_NAMES: ClassName[] = [
    CLASS_NAME_DEATHKNIGHT, CLASS_NAME_DEMONHUNTER, CLASS_NAME_DRUID, CLASS_NAME_HUNTER, CLASS_NAME_MAGE, CLASS_NAME_MONK, CLASS_NAME_PALADIN, CLASS_NAME_PRIEST, CLASS_NAME_ROGUE, CLASS_NAME_SHAMAN, CLASS_NAME_WARLOCK, CLASS_NAME_WARRIOR
]

/**
 * A dictionary containing user-friendly display names for each class.
 */
export const CLASS_DISPLAY_NAMES = {
    [CLASS_NAME_WARRIOR]: 'Warrior',
    [CLASS_NAME_WARLOCK]: 'Warlock',
    [CLASS_NAME_SHAMAN]: 'Shaman',
    [CLASS_NAME_ROGUE]: 'Rogue',
    [CLASS_NAME_PRIEST]: 'Priest',
    [CLASS_NAME_PALADIN]: 'Paladin',
    [CLASS_NAME_MONK]: 'Monk',
    [CLASS_NAME_MAGE]: 'Mage',
    [CLASS_NAME_HUNTER]: 'Hunter',
    [CLASS_NAME_DRUID]: 'Druid',
    [CLASS_NAME_DEMONHUNTER]: 'Demon Hunter',
    [CLASS_NAME_DEATHKNIGHT]: 'Death Knight'
}

export const COVENANT_NIGHTFAE = 'nightfae';
export const COVENANT_KYRIAN = 'kyrian';
export const COVENANT_NECROLORD = 'necrolord';
export const COVENANT_VENTHYR = 'venthyr';

type SpecInfo = {
    key: string,
    icon: string,
    display: string,
};

export const CLASS_SPECS: Record<ClassName, Record<string, SpecInfo>> = {
    [CLASS_NAME_DEATHKNIGHT]: {
        blood: {key: 'blood', icon: 'spell_deathknight_bloodpresence.jpg', display: 'Blood'},
        frost: {key: 'frost', icon: 'spell_deathknight_frostpresence.jpg', display: 'Frost'},
        unholy: {key: 'unholy', icon: 'spell_deathknight_unholypresence.jpg', display: 'Unholy'},
    },
    [CLASS_NAME_DEMONHUNTER]: {
        havoc: {key: 'havoc', icon: 'ability_demonhunter_specdps.jpg', display: 'Havoc'},
        vengeance: {key: 'vengeance', icon: 'ability_demonhunter_spectank.jpg', display: 'vengeance'},
    },
    [CLASS_NAME_DRUID]: {
        feral: {key: 'feral', icon: 'ability_druid_catform.jpg', display: 'Feral'},
        restoration: {key: 'restoration', icon: 'spell_nature_healingtouch.jpg', display: 'Restoration'},
        balance: {key: 'balance', icon: 'spell_nature_starfall.jpg', display: 'Balance'},
        guardian: {key: 'guardian', icon: 'ability_racial_bearform.jpg', display: 'Guardian'},
    },
    [CLASS_NAME_HUNTER]: {
        survival: {key: 'survival', icon: 'ability_hunter_camouflage.jpg', display: 'Survival'},
        marksmanship: {key: 'marksmanship', icon: 'ability_hunter_focusedaim.jpg', display: 'Marksmanship'},
        beastmastery: {key: 'beastmastery', icon: 'ability_hunter_bestialdiscipline.jpg', display: 'Beast Mastery'},
    },
    [CLASS_NAME_MAGE]: {
        arcane: {key: 'arcane', icon: 'spell_holy_magicalsentry.jpg', display: 'Arcane'},
        fire: {key: 'fire', icon: 'spell_fire_firebolt02.jpg', display: 'Fire'},
        frost: {key: 'frost', icon: 'spell_frost_frostbolt02.jpg', display: 'Frost'},
    },
    [CLASS_NAME_MONK]: {
        brewmaster: {key: 'brewmaster', icon: 'spell_monk_brewmaster_spec.jpg', display: 'Brewmaster'},
        windwalker: {key: 'windwalker', icon: 'spell_monk_windwalker_spec.jpg', display: 'Windwalker'},
        mistweaver: {key: 'mistweaver', icon: 'spell_monk_mistweaver_spec.jpg', display: 'Mistweaver'},
    },
    [CLASS_NAME_PALADIN]: {
        holy: {key: 'holy', icon: 'spell_holy_holybolt.jpg', display: 'Holy'},
        protection: {key: 'protection', icon: 'ability_paladin_shieldofthetemplar.jpg', display: 'Protection'},
        retribution: {key: 'retribution', icon: 'spell_holy_auraoflight.jpg', display: 'Retribution'},
    },
    [CLASS_NAME_PRIEST]: {
        shadow: {key: 'shadow', icon: 'spell_shadow_shadowwordpain.jpg', display: 'Shadow'},
        holy: {key: 'holy', icon: 'spell_holy_guardianspirit.jpg', display: 'Holy'},
        discipline: {key: 'discipline', icon: 'spell_holy_powerwordshield.jpg', display: 'Discipline'},
    },
    [CLASS_NAME_ROGUE]: {
        assassination: {key: 'assassination', icon: 'ability_rogue_deadlybrew.jpg', display: 'Assassination'},
        subtlety: {key: 'subtlety', icon: 'ability_stealth.jpg', display: 'Subtley'},
        outlaw: {key: 'outlaw', icon: 'ability_rogue_waylay.jpg', display: 'Outlaw'},
    },
    [CLASS_NAME_SHAMAN]: {
        restoration: {key: 'restoration', icon: 'spell_nature_magicimmunity.jpg', display: 'Restoration'},
        enhancement: {key: 'enhancement', icon: 'ability_shaman_stormstrike.jpg', display: 'Enhancement'},
        elemental: {key: 'elemental', icon: 'spell_nature_lightning.jpg', display: 'Elemental'},
    },
    [CLASS_NAME_WARLOCK]: {
        destruction: {key: 'destruction', icon: 'spell_shadow_rainoffire.jpg', display: 'Destruction'},
        demonology: {key: 'demonology', icon: 'spell_shadow_metamorphosis.jpg', display: 'Demonology'},
        affliction: {key: 'affliction', icon: 'spell_shadow_deathcoil.jpg', display: 'Affliction'},
    },
    [CLASS_NAME_WARRIOR]: {
        protection: {key: 'protection', icon: 'inv_shield_06.jpg', display: 'Protection'},
        arms: {key: 'arms', icon: 'ability_warrior_savageblow.jpg', display: 'Arms'},
        fury: {key: 'fury', icon: 'ability_warrior_innerrage.jpg', display: 'Fury'},
    },
}

/**
 * A dictionary containing icons for each class specialization.
 */
export const SPEC_ICONS: Record<ClassName, Record<string, string>> = {
    [CLASS_NAME_DEATHKNIGHT]: {
        blood: 'spell_deathknight_bloodpresence.jpg',
        frost: 'spell_deathknight_frostpresence.jpg',
        unholy: 'spell_deathknight_unholypresence.jpg',
    },
    [CLASS_NAME_DEMONHUNTER]: {
        havoc: 'ability_demonhunter_specdps.jpg',
        vengeance: 'ability_demonhunter_spectank.jpg',
    },
    [CLASS_NAME_DRUID]: {
        feral: 'ability_druid_catform.jpg',
        restoration: 'spell_nature_healingtouch.jpg',
        balance: 'spell_nature_starfall.jpg',
        guardian: 'ability_racial_bearform.jpg',
    },
    [CLASS_NAME_HUNTER]: {
        survival: 'ability_hunter_camouflage.jpg',
        marksmanship: 'ability_hunter_focusedaim.jpg',
        beastmastery: 'ability_hunter_bestialdiscipline.jpg',
    },
    [CLASS_NAME_MAGE]: {
        arcane: 'spell_holy_magicalsentry.jpg',
        fire: 'spell_fire_firebolt02.jpg',
        frost: 'spell_frost_frostbolt02.jpg',
    },
    [CLASS_NAME_MONK]: {
        brewmaster: 'spell_monk_brewmaster_spec.jpg',
        windwalker: 'spell_monk_windwalker_spec.jpg',
        mistweaver: 'spell_monk_mistweaver_spec.jpg',
    },
    [CLASS_NAME_PALADIN]: {
        holy: 'spell_holy_holybolt.jpg',
        protection: 'ability_paladin_shieldofthetemplar.jpg',
        retribution: 'spell_holy_auraoflight.jpg',
    },
    [CLASS_NAME_PRIEST]: {
        shadow: 'spell_shadow_shadowwordpain.jpg',
        holy: 'spell_holy_guardianspirit.jpg',
        discipline: 'spell_holy_powerwordshield.jpg',
    },
    [CLASS_NAME_ROGUE]: {
        assassination: 'ability_rogue_deadlybrew.jpg',
        subtlety: 'ability_stealth.jpg',
        outlaw: 'ability_rogue_waylay.jpg',
    },
    [CLASS_NAME_SHAMAN]: {
        restoration: 'spell_nature_magicimmunity.jpg',
        enhancement: 'ability_shaman_stormstrike.jpg',
        elemental: 'spell_nature_lightning.jpg',
    },
    [CLASS_NAME_WARLOCK]: {
        destruction: 'spell_shadow_rainoffire.jpg',
        demonology: 'spell_shadow_metamorphosis.jpg',
        affliction: 'spell_shadow_deathcoil.jpg',
    },
    [CLASS_NAME_WARRIOR]: {
        protection: 'inv_shield_06.jpg',
        arms: 'ability_warrior_savageblow.jpg',
        fury: 'ability_warrior_innerrage.jpg',
    },
}
