import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { productsItems } from '../../store/Slices/ProductsSlice';
import {
    ProductsItem,
    ProductsItemLink,
    ProductsItemPrice,
    ProductsItemsBlock,
    ProductsWrapper,
} from './components';
import { Title } from '../ui/components';


const Products = () => {
    const products = useSelector((state: RootState) => productsItems(state).cart);

    return (
        <ProductsWrapper>
            <Title>Products</Title>
            <ProductsItemsBlock>
                {products.map((item: { id: string, name: string, link: string, price: number }) => (
                    <ProductsItem key={item.id}>
                        <ProductsItemLink href={item.link}>{item.name}</ProductsItemLink>
                        <div>
                            <ProductsItemPrice>${item.price.toFixed(2)}</ProductsItemPrice>
                        </div>
                    </ProductsItem>
                ))}
            </ProductsItemsBlock>
        </ProductsWrapper>
    );
};

export default Products;