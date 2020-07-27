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
