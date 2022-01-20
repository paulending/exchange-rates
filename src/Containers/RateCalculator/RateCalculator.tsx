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
    const [lastValue, setLastValue] = useState(0);
    const [lastValueIsSource, setLastValueIsSource] = useState(false);

    const currencies = rates?.map((r: TRate) => r.kod);
    const rate = rates?.find((r: TRate) => r.kod === targetCurrency);

    let sourceValue = 0;
    let targetValue = 0;
    if (rate) {
        console.log('lastValue: ', lastValue);
        console.log('rate: ', rate);
        if (lastValueIsSource) {
            sourceValue = lastValue;
            targetValue = lastValue * rate?.mnozstvi / rate?.kurz;
        }
        else {
            sourceValue = lastValue * rate?.kurz / rate?.mnozstvi;
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
