import React, { useState } from 'react';
import { StyledRateCalculator } from './RateCalculator.style';
import ReactFlagsSelect from 'react-flags-select';
import TextField from '../../Components/TextField';
import { TextFieldType } from '../../Components/TextField/TextField';

interface RateCalculatorProps {
    rates: any;
}

const RateCalculator: React.FC<RateCalculatorProps> = ({ rates }) => {
    const [sourceCurrency, setSourceCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [sourceValue, setSourceValue] = useState();
    const [targetValue, setTargetValue] = useState();

    return (
        <StyledRateCalculator>
            <div className="text-flag-group">
                <TextField
                    onChange={(val: any) => setSourceValue(val)}
                    value={sourceValue}
                    type={TextFieldType.Number}
                />
                <ReactFlagsSelect
                    selected={sourceCurrency}
                    onSelect={code => setSourceCurrency(code)}
                    countries={["US", "GB", "FR", "DE", "IT", "NG"]}
                    customLabels={{
                        "US": { primary: "EN-US" },
                        "GB": { primary: "EN-GB" },
                        "FR": { primary: "FR" }
                    }}
                />
            </div>
            <div className="text-flag-group">
                <TextField
                    onChange={(val: any) => setTargetValue(val)}
                    value={targetValue}
                    type={TextFieldType.Number}
                />
                <ReactFlagsSelect
                    selected={targetCurrency}
                    onSelect={code => setTargetCurrency(code)}
                />
            </div>
        </StyledRateCalculator>
    );
}

export default RateCalculator;

