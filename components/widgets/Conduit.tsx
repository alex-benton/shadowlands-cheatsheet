import React from "react";
import styled from "styled-components";
import theme, {ClassName} from "../theme";
import {ConduitType} from "../types";
import SpecIcon from "./SpecIcon";

type Props = {
    className: ClassName,
    meta: {
        name: string,
        icon: string,
        color: string
    },
    data: ConduitType,
    filter?: string,
}

const Conduit = (props: Props) => {
    const processTag = (tag: string, stuff: any[], rest: string, key: string): { items: JSX.Element[], offset: number } => {
        if (tag === 'condition' && rest.indexOf('<dynamic>') === 0) {
            stuff.push(<span key={key}>{`/`}</span>);
            return {
                items: stuff,
                offset: rest.indexOf('</dynamic>') + '</dynamic>'.length,
            }
        }
        if (tag === 'dynamic') {
            return {
                items: [<Dynamic color={props.meta.color} key={key} className={'dynamic'}>{stuff}</Dynamic>],
                offset: 0,
            }
        }
        if (tag === 'spec') {
            const spec = stuff[0].toLowerCase();
            return {
                items: [<SpecIcon key={key} className={props.className} spec={spec}/>],
                offset: 0
            }
        }

        return {
            items: stuff,
            offset: 0
        };
    }

    const formatDescription = (description: string, currentTag: string | null = null): { items: JSX.Element[], offset: number } => {
        let stuff = [];
        let current = '';

        for (let i = 0; i < description.length; i++) {
            let char = description.charAt(i);

            // if we have a <, continue until we get the >
            if (char === '<') {
                let tag = '';
                let endTag = false;

                // is this an ending tag?
                if (description.charAt(i+1) === '/') {
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

                    const {items, offset} = formatDescription(description.substring(i), tag);
                    stuff.push(items);
                    i += offset - 1;
                } else if (currentTag === tag) {
                    // this is our end tag, return the items we found
                    stuff.push(current);
                    const {items, offset} = processTag(tag, stuff, description.substring(i), `${props.data.id}-${tag}-${i}`);
                    return {
                        items: items,
                        offset: i + offset
                    }
                } else {
                    console.error(`invalid tags!! expected an end tag for: ${currentTag} but got ${tag}`);
                    return {
                        items: [<span key={props.data.id}>{description}</span>],
                        offset: 0
                    };
                }
            } else {
                current += char;
            }
        }

        stuff.push(current);
        return {
            items: stuff.map((item, i) => <span key={i}>{item}</span>),
            offset: 0
        };
    };

    return <Container>
        <IconContainer color={props.meta.color}>
            <ConduitIcon icon={props.data.icon} />
        </IconContainer>
        <ConduitName color={props.meta.color}>{props.data.name}</ConduitName>
        <ConduitDescription>{formatDescription(props.data.description).items}</ConduitDescription>
    </Container>;
}

export default Conduit;

const Container = styled.div`
    background: ${theme.color.background};
    display: flex;
    margin: 4px;
    width: calc(100% - 8px);
`;

const IconContainer = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    border-radius: 10%;
    padding: 2px;
`;

const ConduitIcon = styled.div<{ icon: string }>`
    background: url('/assets/icons/${props => props.icon}.jpg');
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25%;
`;

const ConduitName = styled.div<{ color: string }>`
    padding: 4px 8px;
    color: ${props => props.color};
    font-weight: bold;
    width: 150px;
    flex-shrink: 0;
    align-self: center;
    text-align: center;
`

const ConduitDescription = styled.div`
    color: white;
    align-self: center;
    display: inline;
`;

const Dynamic = styled.span<{ color: string }>`
    color: ${props => props.color};
`;
