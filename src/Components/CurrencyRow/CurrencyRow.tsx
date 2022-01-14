import React from 'react';
import { StyledCurrencyRow } from './CurrencyRow.style';

interface CurrencyRowProps {
    currencyOptions: string[];
    selectedCurrency: string;
    onChangeCurrency?: (e: any) => void;
    onChangeValue?: (e: any) => void;
    value: number;
    disabled?: boolean;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeValue,
    value,
    disabled }) => {

    return (
        <StyledCurrencyRow>
            <input type='number' value={value} onChange={onChangeValue} />
            <select value={selectedCurrency} onChange={onChangeCurrency} disabled={disabled}>
                <option className='default' />
                {currencyOptions.map((option: string) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </StyledCurrencyRow>
    );
}

export default CurrencyRow;
