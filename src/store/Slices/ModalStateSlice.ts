import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialStateType = {
    active: boolean;
}

const initialState: InitialStateType = {
    active: false,
};

const ModalSlice = createSlice<InitialStateType, {
    setActive: (state: InitialStateType, action: PayloadAction<boolean>) => void
}>({
    name: 'modal',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<boolean>) => {
            state.active = action.payload;
        },
    },
});

export const ModalState = (state: RootState) => state.modal.active;

export const { setActive } = ModalSlice.actions;

export default ModalSlice;