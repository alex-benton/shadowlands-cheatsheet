import {ClassName} from "../theme";
import styled from "styled-components";
import React from "react";


const SPEC_ICONS: {[index: string]: {[index: string]: string}} = {
    deathknight: {
        blood: '',
        frost: '',
        unholy: '',
    },
    demonhunter: {
        havoc: '',
        vengeance: '',
    },
    druid: {
        feral: '',
        restoration: '',
        balance: '',
        guardian: '',
    },
    hunter: {
        survival: '',
        marksmanship: '',
        beastmastery: '',
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
        enhancement: 'spell_nature_lightningshield.jpg',
        elemental: 'spell_nature_lightning.jpg',
    },
    warlock: {
        destruction: '',
        demonology: '',
        affliction: '',
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
