import React from 'react';
import { InputUI } from './components';

export interface InputComponentPropsType {
    type: string,
    id: string,
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onBlur: React.FocusEventHandler<HTMLInputElement>,
    checked?: boolean,
    value?: string | number,
    maxLength?: number,
}

const InputComponent = (formik: InputComponentPropsType): React.JSX.Element => {
    return <InputUI
        type={formik.type}
        id={formik.id}
        name={formik.name}
        onChange={formik.onChange}
        onBlur={formik.onBlur}
        checked={formik.checked}
        value={formik.value}
        maxLength={formik.maxLength}
    />;
};

export default InputComponent;