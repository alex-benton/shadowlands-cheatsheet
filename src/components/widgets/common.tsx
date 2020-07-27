import SpecIcon from "./SpecIcon";
import React from "react";
import styled from "styled-components";
import {ClassName} from "../types";

export const processTag = (
    tag: string,
    stuff: any[],
    rest: string,
    key: string,
    className: ClassName,
    color: string
): { items: JSX.Element[], offset: number } => {
    const restCopy = rest.slice().trimLeft();
    if (tag === 'condition' && restCopy.indexOf('<dynamic>') === 0) {
        stuff.push(<span key={key}>{`/`}</span>);
        let offset = rest.indexOf('</dynamic>') + '</dynamic>'.length;
        offset += (rest.substring(offset).length - rest.substring(offset).trimLeft().length);
        return {
            items: stuff,
            offset: offset,
        }
    }
    if (tag === 'dynamic') {
        return {
            items: [<Dynamic color={color} key={key} className={'dynamic'}>{stuff}</Dynamic>],
            offset: 0,
        }
    }
    if (tag === 'spec') {
        const spec = stuff[0].toLowerCase();
        return {
            items: [<SpecIcon key={key} wowClassName={className} spec={spec}/>],
            offset: rest.length - restCopy.length
        }
    }

    return {
        items: stuff,
        offset: 0
    };
}

export const formatDescription = (
    id: string,
    description: string,
    className: ClassName,
    color: string,
    currentTag: string | null = null,
    lineBreak = false
): { items: JSX.Element[], offset: number } => {
    let stuff = [];
    let current = '';

    for (let i = 0; i < description.length; i++) {
        let char = description.charAt(i);

        // if we have a <, continue until we get the >
        if (char === '<') {
            let tag = '';
            let endTag = false;

            // is this an ending tag?
            if (description.charAt(i + 1) === '/') {
                endTag = true;
                i++;
            }

            // finish completing the tag
            i++;
            while (i < description.length && description.charAt(i) !== '>') {
                tag += description.charAt(i);
                i++;
            }

            i++;
            // not an ending tag, start a new formatDescription at this point with the tag.
            if (!endTag) {
                // save our current stuff.
                stuff.push(current);
                current = '';

                const {items, offset} = formatDescription(id, description.substring(i), className, color, tag);
                stuff.push(items);
                i += offset - 1;
            } else if (currentTag === tag) {
                // this is our end tag, return the items we found
                stuff.push(current);
                const {items, offset} = processTag(tag, stuff, description.substring(i), `${id}-${tag}-${i}`, className, color);
                return {
                    items: items,
                    offset: i + offset
                }
            } else {
                console.error(`invalid tags!! expected an end tag for: ${currentTag} but got ${tag}`);
                return {
                    items: [<span key={id}>{description}</span>],
                    offset: 0
                };
            }
        } else {
            if (char === '\n') {
                if (lineBreak) {
                    stuff.push(current);
                    stuff.push(<br/>);
                    current = '';
                }
            } else {
                current += char;
            }
        }
    }

    stuff.push(current);
    return {
        items: stuff.map((item, i) => <span key={i}>{item}</span>),
        offset: 0
    };
};

const Dynamic = styled.span<{ color: string }>`
    color: ${props => props.color};
`;
