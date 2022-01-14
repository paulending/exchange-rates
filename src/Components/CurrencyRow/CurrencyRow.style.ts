import styled from 'styled-components';

export const StyledCurrencyRow = styled.div`
    display: flex;

    input {
        border: 1px solid var(--colorGray2);
        border-right: 0;
        border-radius: 0;
        border-top-left-radius: var(--borderRadius);
        border-bottom-left-radius: var(--borderRadius);
        margin: 0;

        &:disabled {
            border: 1px solid var(--colorGray2);
        }
        &:focus{
            outline: none;
        }
    }

    select {
        border: 1px solid var(--colorGray2);
        border-left: 0;
        border-radius: 0;
        border-top-right-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);

        &:disabled {
            border: 1px solid var(--colorGray2);
            border-left: 0;
            color: var(--colorGray2);
            cursor: not-allowed;
            opacity: 1;
        }
        &:focus{
            outline: none;
        }
    }

    .default { 
        display: none;
    }
`;