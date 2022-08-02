import React from 'react';

interface LabelProps {
    forInput: string;
    value?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Label({ forInput, value, className, children } : LabelProps) {
    return (
        <label htmlFor={forInput} className={`block ` + className}>
            {value ? value : children}
        </label>
    );
}