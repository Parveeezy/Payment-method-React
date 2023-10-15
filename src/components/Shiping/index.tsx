import React from 'react';
import { Title } from '../ui/components';
import { ShippingItemName, ShippingItemPrice, ShippingItemsBlock, ShippingWrapper } from './components';

const Shipping = () => {
    return (
        <ShippingWrapper>
            <Title>Shipping method</Title>
            <ShippingItemsBlock>
                <ShippingItemName>FedEx</ShippingItemName>
                <ShippingItemPrice>$13.99</ShippingItemPrice>
            </ShippingItemsBlock>
        </ShippingWrapper>
    );
};

export default Shipping;