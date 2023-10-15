import styled from 'styled-components';

type CardButtonType = {
    $isActive: boolean
}

export const ButtonsBlock = styled('div')(({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,

    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}));

export const CardButton = styled('button')<CardButtonType>((props) => ({
    backgroundColor: props.$isActive ? 'rgba(48,88,241,0.84)' : '#ffffff',
    color: props.$isActive ? '#ffffff' : 'rgba(48,88,241,0.84)',
    border: props.$isActive ? 'none' : '1px solid #aebfaf',
    fontWeight: 500,
    fontSize: 24,
    borderRadius: 5,
    padding: '15px 110px',
    margin: 0,
    cursor: 'pointer',
    width: 350,
    marginLeft: 5,

    '@media (max-width: 1140px)': {
        marginTop: 10,
        width: 300,
        fontWeight: 500,
        fontSize: 22,
        height: 50,
        padding: '10px 80px',
    },

    '@media (max-width: 969px)': {
        marginTop: 10,
        width: 250,
        fontWeight: 500,
        fontSize: 18,
        height: 50,
        padding: '10px 60px',
    },

    '@media (max-width: 819px)': {
        marginTop: 10,
        width: 230,
        fontWeight: 500,
        fontSize: 18,
        height: 50,
        padding: '10px 60px',
    },

    '@media (max-width: 768px)': {
        marginTop: 10,
        width: 280,
        fontWeight: 500,
        fontSize: 18,
        height: 40,
        padding: '10px 80px',
    },

    '@media (max-width: 419px)': {
        marginTop: 10,
        width: 200,
        fontWeight: 500,
        fontSize: 16,
        height: 30,
        padding: '5px 50px',
    },
}));