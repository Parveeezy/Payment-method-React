import React from 'react';
import { ContainerWrapper } from './components';

type ContainerPropsType = {
    children: React.ReactNode
}

const Container = (props: ContainerPropsType) => {
    return (
        <ContainerWrapper>
            {props.children}
        </ContainerWrapper>
    );
};

export default Container;