import styled from 'styled-components';

export const StyledRate = styled.tr`
    td {
        text-align: center;
    }

    &:nth-child(even) td {
        background: var(--colorGray1);
    }

    &.selected {
        td {
            background: var(--colorSecondary);
        }
    }
`;