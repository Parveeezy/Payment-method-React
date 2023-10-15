import styled from 'styled-components';

export const ModalContainer = styled('div')(( active: any) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.9)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: active ? 'scale(1)' : 'scale(0)',
}));

export const ModalWrapper = styled('div')(({
    width: 600,
    minHeight: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
}));

export const ModalContentHeader = styled('div')(({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    borderBottom: '1px solid #000000',
}));

export const ModalContentTitle = styled('div')(({
    fontSize: 22,
}));

export const ModalContentCloseButton = styled('button')(({
    padding: '5px 15px',
    borderRadius: 12,
    border: 'none',
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: 'rgba(48,88,241,0.84)',
    color: '#ffffff',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '#0043ff',
    }
}));

export const ModalContent = styled('div')(({
    padding: 25,
}));