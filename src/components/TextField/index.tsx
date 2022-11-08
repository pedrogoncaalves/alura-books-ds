import styled from "styled-components";

import React from "react";

const styledLabel = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

const styledInput = styled.input`
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
`

export interface IFieldTextProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
}

export const textField = ({ label, value, onChange, type = 'text' } : IFieldTextProps) => {
    return (
        <div>
            <styledLabel>
                {label}
            </styledLabel>
            <styledInput type={type} value={value} onChange={event => onChange(event.target.value)}/>
        </div>
    )
}