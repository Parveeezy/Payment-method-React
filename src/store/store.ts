import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Slices/ProductsSlice';
import buttonSlices from './Slices/ButtonSlices';
import ModalSlice from './Slices/ModalStateSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        paymentMethod: buttonSlices.reducer,
        modal: ModalSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;