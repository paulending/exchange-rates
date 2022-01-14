import styled from 'styled-components';

export const StyledRates = styled.div`
    border-radius: var(--borderRadius);
    border: 1px solid var(--colorGray2);
    margin: var(--gap) auto;
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 0px 8px 0px #8F8F8F;

    table {
        border-collapse: collapse;
        border: 0;
        width: 100%;
        
    }

    th {
        background: var(--colorWhite);
        border-bottom: 1px solid var(--colorGray2);
        font-weight: 500;
        padding: var(--gap);
        text-transform: uppercase;
        position: sticky;
        top: -5px;

        &:first-child {
            border-top-left-radius: var(--borderRadius);
        }
        &:last-child {
            border-top-right-radius: var(--borderRadius);
        }
    }

    td {
        padding: calc(var(--gap) / 4);
    }
`;