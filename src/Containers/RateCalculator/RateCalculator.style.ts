import styled from 'styled-components';

export const StyledRateCalculator = styled.div`
    align-items: center;
    border-radius: var(--borderRadius);
    border: 1px solid var(--colorGray2);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: var(--gap) auto;
    max-width: 500px;
    padding: var(--gap);
    width: 100%;
    
    box-shadow: 0px 0px 8px 0px #8F8F8F;
    
    input { 
        width: 80%;
    }

    .equal {
        margin: 0 calc(var(--gap) / 4);
    }
`;