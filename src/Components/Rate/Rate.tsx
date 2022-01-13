import React from 'react';
import { StyledRate } from './Rate.style';

interface RateProps {
    data: any;
    parentKey: string;
}

const Rate: React.FC<RateProps> = ({ data, parentKey }) => {

    return (
        <StyledRate>
            {Object.values(data).map((val: any) => <td key={`${parentKey}-value-${val}`}>{val}</td>)}
        </StyledRate>
    );
}

export default Rate;
