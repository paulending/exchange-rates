import React from 'react';
import { TRate } from '../../Types/App';
import Rate from '../Rate';
import { StyledRates } from './Rates.style';

interface RatesProps {
    headers: string[];
    rates: TRate[];
    targetCurrency?: string;
}

const Rates: React.FC<RatesProps> = ({ headers, rates, targetCurrency }) => {
    return (
        <StyledRates>
            <table>
                <thead>
                    <tr>
                        {headers?.map((h: string) => <th key={`table-header-${h}`}>{h}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {rates?.length > 0 ?
                        rates?.map((rate: TRate) =>
                            <Rate
                                key={`table-row-${rate.kod}`}
                                parentKey={`table-row-${rate.kod}`}
                                data={rate}
                                selected={targetCurrency === rate.kod}
                            />
                        )
                        :
                        null
                    }
                </tbody>
            </table>
        </StyledRates>
    );
}

export default Rates;
