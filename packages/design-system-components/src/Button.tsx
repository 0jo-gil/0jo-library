import { ButtonHTMLAttributes, ElementType, ForwardedRef } from "react";
import { useButton } from "./useButton";

interface ButtonProps<T extends ElementType = 'button' | 'div' | 'a' | 'span'> {
    elementName?: T;
    isDisabled?: boolean;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<T>['type'];
}

export const Button = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    //  ref 추후 버튼 자체 이벤트를 엮을 경우 추가
    const {buttonProps} = useButton(props);

    const renderProps = {
        ...props,
        state: {
            isDisabled: props.isDisabled || false,
        },
        defaultClass: 'design-system-button'
    }

    return (
        <button 
            {...buttonProps}
            {...renderProps}
            ref={ref}
        />
    )
}