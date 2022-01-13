import React, { useState } from 'react';
import { StyledRateCalculator } from './RateCalculator.style';
import ReactFlagsSelect from 'react-flags-select';
import TextField from '../../Components/TextField';
import { TextFieldType } from '../../Components/TextField/TextField';
import CurrencySelect from '../../Components/CurrencySelect';

interface RateCalculatorProps {
    rates: any;
}

const RateCalculator: React.FC<RateCalculatorProps> = ({ rates }) => {
    const [targetCurrency, setTargetCurrency] = useState('');
    const [sourceValue, setSourceValue] = useState(1);
    const [targetValue, setTargetValue] = useState(0);

    return (
        <StyledRateCalculator>
            <div className='value-currency-group'>
                <TextField
                    onChange={(val: any) => setSourceValue(val)}
                    value={sourceValue}
                    type={TextFieldType.Number}
                />
                <span>CZK</span>
            </div>
            <div className='equal'>=</div>
            <div className='value-currency-group'>
                <TextField
                    onChange={(val: any) => setTargetValue(val)}
                    value={targetValue}
                    type={TextFieldType.Number}
                />
                <CurrencySelect
                    value={targetCurrency}
                    options={rates.map((r: any) => r.kod)}
                    onChange={setTargetCurrency}
                    placeholder={'Currency'}
                />
            </div>
        </StyledRateCalculator>
    );
}

export default RateCalculator;
