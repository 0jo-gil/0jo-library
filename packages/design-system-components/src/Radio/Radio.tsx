import React, { Ref, useId } from "react";

type Props = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactElement | React.ReactNode | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = (
    {
        onChange, children, ...props
    }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const id = props.id ? `0jo__ui-radio-${props.id}` : useId();

    return (
        <div>
            <input 
                id={id}
                type='radio'
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


export const ForwardedRadio = React.forwardRef(Radio);