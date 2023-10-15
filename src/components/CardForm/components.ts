import styled from 'styled-components';

export const CardWrapper = styled('div')(({}));

export const Necessarily = styled('span')(({
    color: 'red',
}));

export const CardInfoBlock = styled('div')(({
    display: 'flex',

    '@media (max-width: 959px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}));

export const CardHolderData = styled('div')(({
    border: '1px solid rgba(208,208,208,0.60)',
    maxWidth: 350,
    marginLeft: 20,
    marginRight: 20,
    padding: 30,
    borderRadius: 5,

    '@media (max-width: 959px)': {
        marginLeft: 0,
    },
}));

export const CardHolderDateBlock = styled('div')(({
    marginTop: 25,
    marginBottom: 25,
    width: '100%',
}));

export const CardHolderDateData = styled('div')(({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    marginTop: 5,
}));

export const CardHolderDateInfo = styled('div')(({}));

export const CardHolderPin = styled('div')(({
    marginLeft: 20,
    marginTop: 31,

    '@media (max-width: 1168px)': {
        marginLeft: 20,
    },
}));

export const CardLabel = styled('label')(({
    fontWeight: 500,
    fontSize: 18,
}));

export const InputWrapper = styled('div')<any>((props) => ({
    height: 46,
    fontSize: 24,
    border: '1px solid #aebfaf',
    display: 'flex',
    marginTop: 5,
    position: 'relative',

    ...(props.size === 'large' && {
        maxWidth: '100%',
    }),

    ...(props.size === 'medium' && {
        width: '50%',
    }),

    ...(props.size === 'small' && {
        width: '45px',
    }),
}));

export const InputImage = styled('img')({
    marginRight: 3,
    width: '56px',
    height: 44,
    cursor: 'pointer',
});

export const CvvDescription = styled('div')({
    position: 'absolute',
    width: 350,
    fontSize: 14,
    fontWeight: 400,
    top: 0,
    left: 185,
    border: '1px solid #aebfaf',
    padding: 3,
    wordWrap: 'break-word',
    marginTop: 0,
    flexGrow: 1,
    backgroundColor: '#ffffff',

    '@media (max-width: 1299px)': {
        top: 50,
        left: 0,
    },
});

export const CheckboxWrapper = styled('div')({
    width: '97%',
    border: '1px solid rgba(208,208,208,0.42)',
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    fontSize: 18,
});

export const Checkbox = styled('input')({
    width: 15,
    height: 15,
    marginRight: 10,
});

export const TermsAndConditions = styled('div')({
    display: 'inline',
    color: 'grey',
    borderBottom: '1px dotted grey',
    cursor: 'pointer',
});

export const SubmitButton = styled('button')({
    width: '100%',
    height: 65,
    backgroundColor: '#ff4400',
    color: '#ffffff',
    fontWeight: 400,
    fontSize: 25,
    border: 'none',
    borderRadius: 12,
});

export const ErrorText = styled('div')({
    color: 'red',
    fontSize: 16,
    marginTop: 5,
});