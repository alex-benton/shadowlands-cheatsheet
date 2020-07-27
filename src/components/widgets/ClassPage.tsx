import PageHeader from "../common/PageHeader";
import React, {useState} from "react";
import Covenants from "./Covenants";
import {isEmpty} from "lodash";
import Legendaries from "./Legendaries";
import Conduits from "./Conduits";
import styled from "styled-components";
import {ClassData} from "../util";
import Footer from "../common/Footer";
import filterContext from "../../state/filterContext";

const ClassPage = ({wowClassName, data}: ClassData) => {
    const [filter, setFilter] = useState<string | undefined>(undefined);
    const FilterContext = filterContext(wowClassName);
    return <FilterContext.Provider value={{
        filter: filter,
        setFilter: setFilter
    }}>
        <Container>
            <PageHeader wowClassName={wowClassName}/>
            <Content>
                <Covenants
                    data={data.covenants}
                    className={wowClassName}
                />
                {!isEmpty(data.legendaries) ? <Legendaries
                    data={data.legendaries}
                    className={wowClassName}
                /> : null}
                {!isEmpty(data.conduits) ? <Conduits
                    data={data.conduits}
                    className={wowClassName}
                /> : null}
            </Content>
            <Footer/>
        </Container>
    </FilterContext.Provider>
};

export default ClassPage;

const Container = styled.div``;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
