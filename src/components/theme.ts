export default {
    font: {
        logo: `'Stalinist One', cursive`,
        title: `'Bungee', cursive`,
        body: `'Open Sans', sans-serif`,
    },

    color: {
        background: `rgba(0,0,0,.50)`,
        content: `#111`,

        body: `#ccc`,

        classes: {
            deathknight: '#C41F3B',
            demonhunter: '#A330C9',
            druid: '#FF7D0A',
            hunter: '#ABD473',
            mage: '#69CCF0',
            monk: '#00FF96',
            paladin: '#F58CBA',
            priest: '#FFFFFF',
            rogue: '#FFF569',
            shaman: '#0070DE',
            warlock: '#9482C9',
            warrior: '#C79C6E'
        },

        covenants: {
            kyrian: 'rgb(70, 45, 10)',
            venthyr: 'rgb(70, 30, 30)',
            nightfae: 'rgb(20, 56, 83)',
            necrolord: 'rgb(45, 26, 59)',
        }
    }
};

export type ClassName = 'deathknight' | 'demonhunter' | 'druid' | 'hunter' | 'mage' | 'monk' | 'paladin' | 'priest' | 'rogue' | 'shaman' | 'warlock' | 'warrior';
export type CovenantName = 'kyrian' | 'venthyr' | 'nightfae' | 'necrolord';
