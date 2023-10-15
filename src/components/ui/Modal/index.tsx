import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalState, setActive } from '../../../store/Slices/ModalStateSlice';

import {
    ModalContainer,
    ModalContent,
    ModalContentCloseButton,
    ModalContentHeader,
    ModalContentTitle,
    ModalWrapper,
} from './components';
import { AppDispatch, RootState } from '../../../store/store';


const Modal = (): React.JSX.Element => {

    const active = useSelector((state: RootState) => ModalState(state));
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {active && (
                <ModalContainer
                    onClick={() => dispatch(setActive(false))}
                >
                    <ModalWrapper onClick={e => e.stopPropagation()}>
                        <ModalContentHeader>
                            <ModalContentTitle>
                                Terms and Conditions
                            </ModalContentTitle>
                            <ModalContentCloseButton
                                onClick={() => dispatch(setActive(false))}
                            >
                                x
                            </ModalContentCloseButton>
                        </ModalContentHeader>
                        <ModalContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa deleniti molestias
                            repellat
                            tempora voluptatem? Asperiores assumenda, consectetur ducimus eos fuga non odit omnis optio
                            placeat
                            quaerat quas totam. Aliquid autem, corporis cupiditate distinctio, dolore dolorem eaque eius
                            eligendi
                            esse est et ex exercitationem facere facilis fugit hic id illum in ipsam labore magnam nisi
                            non
                            obcaecati officia officiis quaerat ratione sed suscipit, voluptas voluptatem! Ab ad
                            adipisci,
                            corporis
                            culpa cum deleniti esse eveniet fuga, inventore maiores necessitatibus non odit quam
                            quibusdam
                            reprehenderit similique sit, tempora ullam vitae voluptate. Alias, at corporis dolores
                            ducimus
                            exercitationem id magnam natus nemo nisi nulla, provident quod repellat similique ut
                            veritatis
                            voluptas
                            voluptatum? Ducimus fugit porro quidem. Deleniti earum eius exercitationem explicabo harum,
                            incidunt
                            itaque labore maxime molestias natus odio odit repellendus sint unde, voluptatibus. A
                            accusantium
                            corporis doloribus expedita, fugit id ipsa, iste itaque libero minus molestias pariatur
                            quaerat
                            quam qui
                            quia veniam.
                        </ModalContent>
                    </ModalWrapper>
                </ModalContainer>
            )}
        </>
    );
};

export default Modal;

