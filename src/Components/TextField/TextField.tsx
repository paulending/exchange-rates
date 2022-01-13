import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { StyledTextField } from './TextField.style';

interface TextFieldProps {
    value?: string | number;
    disabled?: boolean;
    onChange: (value: string | number) => void;
    type: TextFieldType;
}

export enum TextFieldType {
    Text = 'text',
    Number = 'number',
    Password = 'password',
}

const TextField: React.FC<TextFieldProps> = ({ disabled, onChange, type, value }) => {

    return (
        <StyledTextField>
            <input type={type} value={value} onChange={handleChange} disabled={disabled} />
        </StyledTextField>
    );

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const newValue: string | number = (type === TextFieldType.Number ? Number(e.target.value) : e.target.value);
        onChange(newValue);
    }
}

export default TextField;

