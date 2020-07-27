import React from "react";
import {ClassName} from "../components/types";

interface FilterType {
    filter: string | undefined,
    setFilter: (i: string | undefined) => any,
}

const filterContext = {
    deathknight: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    demonhunter: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    druid: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    hunter: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    mage: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    monk: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    paladin: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    priest: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    rogue: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    shaman: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    warlock: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
    warrior: React.createContext<FilterType>({
        filter: undefined,
        setFilter: (i: string | undefined) => i,
    }),
};

export default (name: ClassName) => filterContext[name];
