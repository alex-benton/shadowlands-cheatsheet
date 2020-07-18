const htmlparser2 = require('htmlparser2');
const axios = require('axios');
const $ = require('cheerio');
const _ = require('lodash');
const fs = require('fs')
const path = require('path')

async function parseClass(className) {
    const response = await axios.get(`https://shadowlands.wowhead.com/spells/soulbind-conduits/${className}`);
    const dom = htmlparser2.parseDOM(response.data)
    const parsedHTML = $.load(dom);
    return parsedHTML('script').contents().filter((i, tag) => {
        return tag.data && tag.data.startsWith('\/\/<![CDATA[\n');
    }).map((i, tag) => {
        const lines = tag.data.split("\n");
        if (lines[1].startsWith('WH.Gatherer.addData')) {
            const json = lines[1].substring(lines[1].indexOf('{'), lines[1].lastIndexOf('}') + 1);
            return JSON.parse(json);
        } else {
            throw 'Unknown page format.';
        }
    })[0];
}

function mapResults(results) {
    return _.map(results, (item, id) => {
        return {
            id: id,
            name: item.name_enus,
            icon: item.icon,
            type: 'unknown',
            specs: [],
            notes: [],
        };
    })
}

async function parseSpell(conduit) {
    const name = _.replace(_.lowerCase(conduit.name), ' ', '-');
    const url = `https://shadowlands.wowhead.com/spell=${conduit.id}/${name}`;
    const response = await axios.get(url);
    const dom = htmlparser2.parseDOM(response.data)
    const parsedHTML = $.load(dom);
    // const description = parsedHTML('span.q').contents().text();
    const description = parsedHTML('span.q').contents().map((i, tag) => {
        if (tag.type === 'text') {
            return tag.data;
        } else {
            if (_.isEmpty(tag.children)) return '';
            if (_.size(tag.children) === 1) {
                if (tag.attribs['class'] === 'q2') return `<condition>${tag.children[0].data}</condition>`;
                return `<dynamic>${tag.children[0].data}</dynamic>`;
            } else {
                let str = [];
                let isSpec = false;
                for (let i = 0; i < _.size(tag.children); i++) {
                    const child = tag.children[i];
                    if (child.type === 'tag' && child.attribs['class'] === 'tooltip-inside-icon') {
                        isSpec = true;
                    } else if (child.type === 'text' && isSpec) {
                        isSpec = false;
                        const spec = child.data.replace(',', '').trim().replace('Initial', '');
                        if (spec) str.push(`<spec>${spec}</spec>`);
                    }
                }
                return _.join(str, '');
            }
        }
    });
    conduit.description = _.join(description, '');
    return conduit;
}

async function downloadImage(conduit) {
    const destination = path.resolve(__dirname, '..', 'public', 'assets', 'icons', `${conduit.icon}.jpg`);
    if (!fs.existsSync(destination)) {
        const url = `https://wow.zamimg.com/images/wow/icons/large/${conduit.icon}.jpg`;
        const writer = fs.createWriteStream(destination)

        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })
        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    }
}

async function writeResults(className, results) {
    const destination = path.resolve(__dirname, '..', 'data', className, 'conduits.json');
    const existing = fs.existsSync(destination) ? JSON.parse(fs.readFileSync(destination)) : [];
    const data = _.reduce(existing, (acc, conduit) => {
        acc[conduit.id] = conduit;
        return acc;
    }, {})

    const result = _.map(results, conduit => {
        if (data[conduit.id]) {
            conduit.type = data[conduit.id].type;
            conduit.specs = data[conduit.id].specs;
            conduit.notes = data[conduit.id].notes;
        }
        return conduit;
    });

    if (!fs.existsSync(path.resolve(__dirname, '..', 'data', className))) fs.mkdirSync(path.resolve(__dirname, '..', 'data', className));
    const output = JSON.stringify(result, null, 2);
    fs.writeFileSync(destination, output);
}

/*
parseClass('shaman')
    .then(mapResults)
    .then(results => {
        Promise.all(
            _.map(results, conduit => parseSpell(conduit).then(downloadImage))
        ).then(() => writeResults('shaman', results))
    });
*/
/*
parseClass('warrior')
    .then(mapResults)
    .then(results => {
        Promise.all(
            _.map(results, conduit => parseSpell(conduit).then(downloadImage))
        ).then(() => writeResults('warrior', results))
    });
*/
parseClass('druid')
    .then(mapResults)
    .then(results => {
        Promise.all(
            _.map(results, conduit => parseSpell(conduit).then(downloadImage))
        ).then(() => writeResults('druid', results))
    });

parseClass('priest')
    .then(mapResults)
    .then(results => {
        Promise.all(
            _.map(results, conduit => parseSpell(conduit).then(downloadImage))
        ).then(() => writeResults('priest', results))
    });
