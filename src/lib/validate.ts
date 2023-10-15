import * as Yup from 'yup';

export const validationSchema = Yup.object({
    cardHolder: Yup.string()
        .min(2, 'Необходимо минимум 5 символов')
        .max(25, 'Максимум 25 символов')
        .required('Поле обязательно для заполнения'),
    cardNumber: Yup.string()
        .test(
            'checkCardNumberLength',
            'Номер карты должен содержать 16 цифр',
            (value) => value?.replaceAll(' ', '')?.length === 16,
        )
        .required('Поле обязательно для заполнения'),
    expirationMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Месяц должен быть от 01 до 12')
        .required('Поле обязательно для заполнения'),
    expirationYear: Yup.string()
        .matches(/^\d{2}$/, 'Год должен быть в формате YY')
        .required('Поле обязательно для заполнения'),
    cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV должен содержать 3 цифры')
        .required('Поле обязательно для заполнения'),
    agreeToTerms: Yup.bool()
        .oneOf([true], 'Вам необходимо принять условия использования'),
});