import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { useFormik } from 'formik';

import card from '../../assets/card.png';
import question from '../../assets/question.png';

import {
    CardHolderData,
    CardHolderDateBlock,
    CardHolderDateData,
    CardHolderDateInfo,
    CardHolderPin,
    CardInfoBlock,
    CardLabel,
    CardWrapper,
    Checkbox,
    CheckboxWrapper, CvvDescription,
    ErrorText,
    InputImage,
    InputWrapper,
    Necessarily, SubmitButton, TermsAndConditions,
} from './components';
import { validationSchema } from '../../lib/validate';
import InputComponent from '../ui/InputUi/InputUi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { productsItems } from '../../store/Slices/ProductsSlice';
import { setActive } from '../../store/Slices/ModalStateSlice';

const CardForm = () => {

    const products = useSelector((state: RootState) => productsItems(state).cart);
    const dispatch = useDispatch<AppDispatch>();

    const [isFocus, setIsFocus] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            cardHolder: '',
            cardNumber: '',
            expirationMonth: '',
            expirationYear: '',
            expirationDate: '',
            cvv: '',
            agreeToTerms: false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Отправлены следующие данные:', values);
            alert('yooohoo:');
        },
    });

    const handleChangeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = event.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        formik.setFieldValue('cardNumber', formattedValue);
    };

    const handleOnMouseEnter = (e: MouseEvent<HTMLImageElement>): void => {
        e.stopPropagation();
        setIsFocus(true);
    };

    const handleOnMouseLeave = (e: MouseEvent<HTMLImageElement>): void => {
        e.stopPropagation();
        setIsFocus(false);
    };

    const handleChangeModalStatus = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(setActive(true));
    };

    const totalPrice = products.map(el => el.price).reduce((acc, currentValue) => acc + currentValue, 0);

    return (
        <CardWrapper>

            <form onSubmit={formik.handleSubmit}>

                <CardInfoBlock>
                    <CardHolderData>
                        <div>
                            <div>
                                <CardLabel htmlFor='cardNumber'>Card number <Necessarily>*</Necessarily></CardLabel>
                            </div>
                            <InputWrapper size={'large'}>
                                <InputComponent
                                    type='text'
                                    id='cardNumber'
                                    name='cardNumber'
                                    onChange={handleChangeCardNumber}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cardNumber}
                                    maxLength={19}
                                />
                                <InputImage src={card} alt='card' />
                            </InputWrapper>
                            {formik.touched.cardNumber && formik.errors.cardNumber ? (
                                <ErrorText>{formik.errors.cardNumber}</ErrorText>
                            ) : null}
                        </div>

                        <CardHolderDateBlock>

                            <div>
                                <CardLabel htmlFor='expirationDate'>Valid thru
                                    (mm/yy) <Necessarily>*</Necessarily></CardLabel>
                            </div>

                            <CardHolderDateData>

                                <CardHolderDateInfo>
                                    <InputWrapper size={'small'}>
                                        <InputComponent
                                            type='text'
                                            id='expirationMonth'
                                            name='expirationMonth'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expirationMonth}
                                            maxLength={2}
                                        />
                                    </InputWrapper>

                                </CardHolderDateInfo>

                                <div> &nbsp;/&nbsp; </div>

                                <CardHolderDateInfo>
                                    <InputWrapper size={'small'}>
                                        <InputComponent
                                            type='text'
                                            id='expirationYear'
                                            name='expirationYear'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expirationYear}
                                            maxLength={2}
                                        />
                                    </InputWrapper>
                                </CardHolderDateInfo>
                            </CardHolderDateData>

                            <div>
                                {
                                    (formik.touched.expirationMonth && formik.errors.expirationMonth) ||
                                    (formik.touched.expirationYear && formik.errors.expirationYear) ? (
                                        <ErrorText>{formik.errors.expirationMonth}</ErrorText>
                                    ) : null
                                }
                            </div>

                        </CardHolderDateBlock>

                        <div>
                            <div>
                                <CardLabel htmlFor='cardHolder'>Держатель карты <Necessarily>*</Necessarily></CardLabel>
                            </div>
                            <InputWrapper size={'large'}>
                                <InputComponent
                                    type='text'
                                    id='cardHolder'
                                    name='cardHolder'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cardHolder.toUpperCase()}
                                />
                            </InputWrapper>
                            {formik.touched.cardHolder && formik.errors.cardHolder ? (
                                <ErrorText>{formik.errors.cardHolder}</ErrorText>
                            ) : null}
                        </div>
                    </CardHolderData>

                    <CardHolderPin>
                        <div>
                            <CardLabel htmlFor='cvv'>CVV / CVC <Necessarily>*</Necessarily></CardLabel>
                        </div>

                        <InputWrapper size={'medium'}>
                            <InputComponent
                                type='text'
                                id='cvv'
                                name='cvv'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cvv}
                                maxLength={3}
                            />

                            <InputImage
                                src={question}
                                alt='question'
                                onMouseEnter={handleOnMouseEnter}
                                onMouseLeave={handleOnMouseLeave}
                            />

                            {isFocus && (
                                <CvvDescription>
                                    CVV/CVC код (Card Verification Value/Code) находится на задней стороне Вашей
                                    платежной карты вправо на белой линии, предназначенной для подписи, и всегда это три
                                    последних цифры в случае VISA и MasterCard.
                                </CvvDescription>
                            )}

                        </InputWrapper>


                        {formik.touched.cvv && formik.errors.cvv ? (
                            <ErrorText>{formik.errors.cvv}</ErrorText>
                        ) : null}

                    </CardHolderPin>

                </CardInfoBlock>

                <CheckboxWrapper>
                    <div>
                        <label>
                            <Checkbox
                                type='checkbox'
                                id='agreeToTerms'
                                name='agreeToTerms'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.agreeToTerms}
                            />
                        </label>
                        <span>
                                <span>
                                    I accept the&nbsp;
                                </span>
                                <TermsAndConditions
                                    onClick={(e: MouseEvent<HTMLElement>) => handleChangeModalStatus(e)}
                                >
                                    Terms and Conditions
                                </TermsAndConditions>
                            </span>
                    </div>

                    <div>
                        {formik.touched.agreeToTerms && formik.errors.agreeToTerms ? (
                            <ErrorText>{formik.errors.agreeToTerms}</ErrorText>
                        ) : null}
                    </div>
                </CheckboxWrapper>

                <SubmitButton type='submit'>Place order ( ${totalPrice + 13.99} )</SubmitButton>

            </form>

        </CardWrapper>
    );
};

export default CardForm;