import React from 'react';

// interface Option {
//     value: string;
//     text: string
// }

export type Option = [string, string];

interface Select {
    // values: Option[];
    values: Option[];
    onValueChange(value: string): void;
    selectedValue: string;
}

export const UnControlledSelect: React.VFC<Select> = ({ values, onValueChange, selectedValue, ...rest }: Select) => {
    console.log('UnControlledSelect render: selectedValue:: ', selectedValue);
    return (
        <select defaultValue={selectedValue} onChange={({ target: { value } }) => onValueChange(value)} {...rest}>
            {values.map(([value, text]: Option) => (
                <option key={value} value={value}>
                    {text}
                </option>
            ))}
        </select>
    );
};
