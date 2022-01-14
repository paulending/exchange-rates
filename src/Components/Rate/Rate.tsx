import React from 'react';
import { TRate } from '../../Types/App';
import { StyledRate } from './Rate.style';

interface RateProps {
    data: TRate;
    parentKey: string;
    selected?: boolean;
}

const Rate: React.FC<RateProps> = ({ data, parentKey, selected }) => {

    return (
        <StyledRate className={selected ? 'selected' : ''}>
            {Object.values(data).map((val: any) => <td key={`${parentKey}-value-${val}`}>{val}</td>)}
        </StyledRate>
    );
}

export default Rate;
