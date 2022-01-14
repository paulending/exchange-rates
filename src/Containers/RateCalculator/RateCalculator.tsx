import React, { useState } from 'react';
import { StyledRateCalculator } from './RateCalculator.style';
import CurrencyRow from '../../Components/CurrencyRow';
import { TRate } from '../../Types/App';

interface RateCalculatorProps {
    rates: TRate[];
    targetCurrency: string;
    onTargetCurrencyChange: (val: string) => void;
}

const RateCalculator: React.FC<RateCalculatorProps> = ({ rates, targetCurrency, onTargetCurrencyChange }) => {
    const currencies = rates.map((r: TRate) => r.kod);

    const [lastValue, setLastValue] = useState(0);
    const [lastValueIsSource, setLastValueIsSource] = useState(false);

    const rate = rates.find((r: TRate) => r.kod === targetCurrency);

    let sourceValue = 0;
    let targetValue = 0;
    if (rate) {
        if (lastValueIsSource) {
            sourceValue = lastValue;
            targetValue = rate?.kurz / rate?.mnozstvi * lastValue;
        }
        else {
            sourceValue = rate?.kurz / rate?.mnozstvi * lastValue;
            targetValue = lastValue;
        }
    }
    else {
        if (lastValueIsSource) {
            sourceValue = lastValue;
        }
        else {
            targetValue = lastValue;
        }
    }

    return (
        <StyledRateCalculator>
            <CurrencyRow
                currencyOptions={[...currencies, 'CZK']}
                selectedCurrency={'CZK'}
                onChangeCurrency={undefined}
                onChangeValue={handleSourceValueChange}
                value={sourceValue ?? 0}
                disabled
            />
            <div className='equal'>=</div>
            <CurrencyRow
                currencyOptions={currencies}
                selectedCurrency={targetCurrency}
                onChangeCurrency={(e: any) => { onTargetCurrencyChange(e.target.value) }}
                onChangeValue={handleTargetValueChange}
                value={targetValue ?? 0}
            />
        </StyledRateCalculator>
    );

    function handleSourceValueChange(e: any) {
        setLastValue(e.target.value);
        setLastValueIsSource(true);
    }

    function handleTargetValueChange(e: any) {
        setLastValue(e.target.value);
        setLastValueIsSource(false);
    }
}

export default RateCalculator;
