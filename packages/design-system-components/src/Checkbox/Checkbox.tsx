import React from "react";
import { InputHTMLAttributes, ReactElement, ReactNode, Ref, useId } from "react"

type Props = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactElement | ReactNode | string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox =(
    {
        onChange, children, ...props
    }: Props, 
    ref: Ref<HTMLInputElement>
) => {
    const id = props.id ? `0jo__ui-checkbox-${props.id}` : useId(); 

    return (
        <div>
            <input 
                id={id}
                type='checkbox'
                ref={ref}
                onChange={onChange}
                {...props}
            />
            <label id={id}>
                <div>{children}</div>
            </label>
        </div>
    )
}

export const ForwardedCheckbox = React.forwardRef(Checkbox);