import styled from "styled-components";
import React from "react";
import Icon from "../common/Icon";
import {ClassName} from "../types";
import {SPEC_ICONS} from "../constants";

/**
 * The props accepted by the SpecIcon component.
 */
type Props = {
    wowClassName: ClassName,
    spec: string,
    size: number,
}

/**
 * An icon component representing the provided WoW class and specialization.
 */
const SpecIcon = (props: Props) => {
    const specs = SPEC_ICONS[props.wowClassName];
    const spec = specs[props.spec]

    return <StyledIcon color={'black'} icon={spec} size={props.size} />;
}

/**
 * The default SpecIcon props.
 */
SpecIcon.defaultProps = {
    size: 18,
}

export default SpecIcon;

/**
 * The icon component, with a style override.
 */
const StyledIcon = styled(Icon)`
    display: inline-flex;
`;
