import React from 'react';
import { ButtonsBlock, CardButton } from './components';
import { Title } from '../ui/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPaymentMethod } from '../../store/Slices/ButtonSlices';
import CardForm from '../CardForm';

const ButtonComponent = () => {
    const buttons = useSelector((state: RootState) => state.paymentMethod);
    const dispatch = useDispatch();

    const handleChangeState = (id: string): void => {
        dispatch(setPaymentMethod(id));
    };

    return (
        <>
            <Title>Payment method</Title>

            <ButtonsBlock>

                {buttons.button.map(el => {
                    return (
                        <div key={el.id}>
                            <CardButton
                                onClick={() => handleChangeState(el.id)}
                                $isActive={el.isActive}
                            >
                                {el.name}
                            </CardButton>
                        </div>

                    );
                })}

            </ButtonsBlock>

            {buttons.button.map(el => {
                return (el.name === 'Credit Card' && el.isActive) && (
                    <CardForm key={el.id} />
                );
            })}

        </>

    );
};

export default ButtonComponent;