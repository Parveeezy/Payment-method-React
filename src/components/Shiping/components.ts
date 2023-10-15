import styled from 'styled-components';

export const ShippingWrapper = styled('div')(({}));

export const ShippingItemsBlock = styled('div')(({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 20,
}));

export const ShippingItemName = styled('span')(({
    fontSize: 22,
}));

export const ShippingItemPrice = styled('span')(({
    fontSize: 22,
    fontWeight: 500,
}));