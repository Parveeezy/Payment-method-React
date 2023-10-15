import styled from 'styled-components';

export const ProductsWrapper = styled('div')(({}));

export const ProductsItemsBlock = styled('div')(({}));

export const ProductsItem = styled('div')(({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 20,
}));

export const ProductsItemLink = styled('a')(({
    color: 'blue',
    fontSize: 22,
    marginRight: 10,

    '&:hover': {
        color: '#ff9300',
    },

    '@media (max-width: 959px)': {
        fontSize: 20,
    },

    '@media (max-width: 599px)': {
        fontSize: 18,
    }
}));

export const ProductsItemPrice = styled('span')(({
    fontSize: 22,
    fontWeight: 500,

    '@media (max-width: 959px)': {
        fontSize: 20,
    },

    '@media (max-width: 599px)': {
        fontSize: 18,
    }
}));