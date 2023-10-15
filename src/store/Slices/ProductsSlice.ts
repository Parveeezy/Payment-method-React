import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { v4 } from 'uuid';

interface CartStateType {
    id: string,
    name: string,
    link: string,
    price: number,
}

export interface ProductsStateType {
    cart: Array<CartStateType>;
}

const initialState: ProductsStateType = {
    cart: [
        {
            id: v4(),
            name: 'Apple® - iPad® with Retina® display WI-FI - 32GB - White',
            link: 'https://www.apple.com/shop/buy-ipad/ipad',
            price: 449.00,
        },
        {
            id: v4(),
            name: '16GB A Series Walkman Video MP3',
            link: 'https://demo.energothemes.com/vivashop-b2b/electronics/mp3-players/mp3-players/16gb-a-series-walkman-video-mp3/',
            price: 130.00,
        },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state: ProductsStateType) => {
            return state;
        },
    },
});


export const productsItems = (state: RootState) => state.products;

export const { getProducts } = productsSlice.actions;

export default productsSlice;