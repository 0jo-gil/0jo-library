import { HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

type ComponentProps = {
    input: React.InputHTMLAttributes<HTMLInputElement>;
}

export type CheckboxProps = {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label?: string;
    children: React.ReactNode | React.ReactElement | string;
} & ComponentProps['input'];


export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    variant = 'primary',
    size,
    label,
    children,
    ...props
}, ref) => {
    return (
        <label>
            <StHiddenCheckbox ref={ref} {...props} />
            <StCheckbox checked={props.checked || false} />
            {children}
        </label>
    )
})

const StHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

const StCheckbox = styled.div<{ checked: boolean }>`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${({ checked }: { checked: boolean }) => checked ? 'blue' : 'white'};
    border-radius: 3px;
    transition: all 150ms;
    border: 1px solid #ddd;
`