import React from 'react';
import Rate from '../Rate';
import { StyledRates } from './Rates.style';

interface RatesProps {
    headers: string[];
    rates: any;
}

const Rates: React.FC<RatesProps> = ({ headers, rates }) => {

    // Check if headers count is same as columns count in data
    if (headers.length !== Object.keys(rates[0]).length) {
        return null;
    }

    return (
        <StyledRates>
            <table>
                <thead>
                    <tr>
                        {headers.map((h: string) => <th key={`table-header-${h}`}>{h}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {rates.length > 0 ?
                        rates.map((rate: any) => <Rate key={`table-row-${rate.kod}`} parentKey={`table-row-${rate.kod}`} data={rate} />)
                        :
                        null
                    }
                </tbody>
            </table>
        </StyledRates>
    );
}

export default Rates;
