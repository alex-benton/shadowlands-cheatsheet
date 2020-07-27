import styled from "styled-components";
import React from "react";
import {urlPrefix} from "../util";

/**
 * The Footer component.
 *
 * This footer appears on every page. It tells you that the data is from Wowhead and Blizzard owns WoW.
 */
const Footer = () => {
    return <Container>
        <Text>This <a href={urlPrefix('/')}>Shadowlands cheatsheet</a> displays spell and ability information for the upcoming World of Warcraft expansion, using <a href={'https://shadowlands.wowhead.com'}>Wowhead</a>'s spell and ability data (with some manually-added annotations). All images copyright Blizzard Entertainment.</Text>
        <Text>The spell and ability data is updated approximately every week, based on when the Shadowlands beta is updated.</Text>
        <Text>Last updated: {process.env.LAST_UPDATED || 'never'}</Text>
    </Container>
}

export default Footer;

/**
 * The container div for this footer.
 */
const Container = styled.div`
    background: #222;
    padding: 30px 50px;
`;

/**
 * The text styling for this footer.
 */
const Text = styled.div`
    margin-bottom: 8px;
    color: #aaa;
    font-weight: lighter;
    font-size: 14px;
`;
