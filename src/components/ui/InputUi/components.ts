import styled from 'styled-components';
import { InputComponentPropsType } from './InputUi';

export const InputUI = styled('input')<InputComponentPropsType>((props) => ({
    width: '100%',
    fontSize: 24,
    outline: 'none',
    border: 'none',
    marginLeft: 5,
}));