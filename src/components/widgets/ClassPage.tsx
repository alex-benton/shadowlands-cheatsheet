import PageHeader from "../common/PageHeader";
import React from "react";
import Covenants from "./Covenants";
import {isEmpty} from "lodash";
import Legendaries from "./Legendaries";
import Conduits from "./Conduits";
import styled from "styled-components";
import {ClassData} from "../util";

const ClassPage = ({wowClassName, data}: ClassData) => (<Container>
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
</Container>)

export default ClassPage;

const Container = styled.div``;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
