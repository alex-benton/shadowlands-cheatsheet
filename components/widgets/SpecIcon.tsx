import {ClassName} from "../theme";
import styled from "styled-components";
import React from "react";


const SPEC_ICONS: {[index: string]: {[index: string]: string}} = {
    deathknight: {
        blood: 'spell_deathknight_bloodpresence.jpg',
        frost: 'spell_deathknight_frostpresence.jpg',
        unholy: 'spell_deathknight_unholypresence.jpg',
    },
    demonhunter: {
        havoc: 'ability_demonhunter_specdps.jpg',
        vengeance: 'ability_demonhunter_spectank.jpg',
    },
    druid: {
        feral: 'ability_druid_catform.jpg',
        restoration: 'spell_nature_healingtouch.jpg',
        balance: 'spell_nature_starfall.jpg',
        guardian: 'ability_racial_bearform.jpg',
    },
    hunter: {
        survival: 'ability_hunter_camouflage.jpg',
        marksmanship: 'ability_hunter_focusedaim.jpg',
        beastmastery: 'ability_hunter_bestialdiscipline.jpg',
    },
    mage: {
        arcane: '',
        fire: '',
        frost: '',
    },
    monk: {
        brewmaster: '',
        windwalker: '',
        mistweaver: '',
    },
    paladin: {
        holy: '',
        protection: '',
        retribution: '',
    },
    priest: {
        shadow: 'spell_shadow_shadowwordpain.jpg',
        holy: 'spell_holy_guardianspirit.jpg',
        discipline: 'spell_holy_powerwordshield.jpg',
    },
    rogue: {
        assassination: '',
        subtlety: '',
        outlaw: '',
    },
    shaman: {
        restoration: 'spell_nature_magicimmunity.jpg',
        enhancement: 'ability_shaman_stormstrike.jpg',
        elemental: 'spell_nature_lightning.jpg',
    },
    warlock: {
        destruction: 'spell_shadow_rainoffire.jpg',
        demonology: 'spell_shadow_metamorphosis.jpg',
        affliction: 'spell_shadow_deathcoil.jpg',
    },
    warrior: {
        protection: 'inv_shield_06.jpg',
        arms: 'ability_warrior_savageblow.jpg',
        fury: 'ability_warrior_innerrage.jpg',
    },
}


type Props = {
    className: ClassName,
    spec: string,
    size: number,
}

const SpecIcon = (props: Props) => {
    const specs = SPEC_ICONS[props.className];
    const spec = specs[props.spec]

    return <IconContainer color={'black'}>
        <Icon icon={spec} size={props.size}/>
    </IconContainer>
}

SpecIcon.defaultProps = {
    size: 18,
}

export default SpecIcon;

const IconContainer = styled.div<{ color: string }>`
    display: inline-flex;
    background-color: ${props => props.color};
    border-radius: 10%;
    margin: 0px 4px;
`;

const Icon = styled.div<{ icon: string, size: number }>`
    background: url('/assets/icons/${props => props.icon}');
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25%;
`;
