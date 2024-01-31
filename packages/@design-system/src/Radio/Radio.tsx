import { forwardRef, useId } from "react";
import styled from "styled-components";


type ComponentProps = {
    input: React.InputHTMLAttributes<HTMLInputElement>;
}

export type RadioProps = {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label?: string;
    id?: string;
    children: React.ReactNode | React.ReactElement | string;
} & ComponentProps['input'];

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
    variant = 'primary',
    size,
    label,
    id,
    children,
    ...props
}, ref) => {
    const radioId = `0jo-radio-${id}` || useId();

    return (
        <label htmlFor={radioId}>
            <StHiddenRadio ref={ref} {...props} id={radioId} />
            <StRadio checked={props.checked || false} />
            {children}
        </label>
    )
})

const StHiddenRadio = styled.input.attrs({ type: 'radio' })``;

const StRadio = styled.div<{ checked: boolean }>``;