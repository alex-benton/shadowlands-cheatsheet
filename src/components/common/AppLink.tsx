import Link, {LinkProps} from "next/link";
import {urlPrefix} from "../util";
import React from "react";

type Props = LinkProps & {
    children: React.ReactElement
}

const AppLink = ({href, as, ...rest}: Props) => {
    const link = as ? urlPrefix(as.toString()) : urlPrefix(href.toString());
    return <Link href={href} as={link} {...rest}/>
};

export default AppLink;
