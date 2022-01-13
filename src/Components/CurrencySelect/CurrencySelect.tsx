import React, { MouseEventHandler, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { StyledCurrencySelect } from './CurrencySelect.style';

interface CurrencySelectProps {
    options: string[];
    placeholder?: string;
    onChange: (value: string) => void;
    value: string;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, options, placeholder = '', onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledCurrencySelect>
            {isOpen && <div className='overlay' onClick={() => setIsOpen(false)}></div>}

            <div className='value' onClick={() => setIsOpen(!isOpen)}>
                {value ? value : placeholder}
            </div>

            {isOpen &&
                <div className='options'>
                    {options.map((o: string) => o && o !== value ? <div className='option' key={`option-${o}`} onClick={() => { onChange(o); setIsOpen(false); }}>{o}</div> : null)}
                </div>
            }
        </StyledCurrencySelect>
    );
}

export default CurrencySelect;

