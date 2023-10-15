import styled from 'styled-components';

import headerLogo from '../../assets/Logo.png';

export const HeaderWrapper = styled('header')(({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const HeaderLogo = styled('div')<any>(({
    backgroundImage: `url(${headerLogo})`,
    width: 40,
    height: 40,
    backgroundSize: 'contain',
}));

export const HeaderLogoTitle = styled('span')<any>(({
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
}));