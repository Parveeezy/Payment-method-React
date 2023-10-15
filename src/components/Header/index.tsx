import React from 'react';
import { HeaderLogo, HeaderLogoTitle, HeaderWrapper } from './components';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo image='src/assets/Logo.png' alt='img' />
            <HeaderLogoTitle>Payment</HeaderLogoTitle>
        </HeaderWrapper>
    );
};

export default Header;