import React from 'react';

import Header from './components/Header';
import Products from './components/Products';
import Container from './components/Container';
import Shipping from './components/Shiping';
import ButtonComponent from './components/CardButton';
import Modal from './components/ui/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {

    const active = useSelector((state: RootState) => state.modal);

    return (
        <div>
            <Container>

                <div>
                    <Header />

                    <div>
                        <h1>Checkout</h1>
                        <Products />
                        <Shipping />
                        <ButtonComponent />
                    </div>
                </div>

            </Container>
            {active && <Modal />}
        </div>

    );
}

export default App;
