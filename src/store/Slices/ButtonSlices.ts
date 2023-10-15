import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { v4 } from 'uuid';

interface ButtonTypes {
    id: string,
    name: string
    isActive: boolean
}

export interface ButtonSlicesType {
    button: Array<ButtonTypes>;
}

const initialState: ButtonSlicesType = {
    button: [
        { id: v4(), name: 'Credit Card', isActive: true },
        { id: v4(), name: 'Gift Card', isActive: false },
        { id: v4(), name: 'Paypal', isActive: false },
    ],
};

const buttonSlice = createSlice({
    name: 'buttonItems',
    initialState,
    reducers: {
        setPaymentMethod: (state, action) => {
            state.button = state.button.map((btn) =>
                btn.id === action.payload ? { ...btn, isActive: true } : { ...btn, isActive: false },
            );
        },
    },
});

export const selectButtonItems = (state: RootState) => state.paymentMethod;

export const { setPaymentMethod } = buttonSlice.actions;

export default buttonSlice;