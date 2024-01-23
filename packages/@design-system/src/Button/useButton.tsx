import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, HTMLAttributes, RefObject } from "react";

export interface ButtonOptions<T extends ElementType> {

}

export interface ButtonProps<T> {
    buttonProps: T;
}
// ref: RefObject<HTMLButtonElement>
export function useButton(props: ButtonOptions<'button'>): ButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>;
// , ref: RefObject<HTMLAnchorElement>
export function useButton(props: ButtonOptions<'a'>): ButtonProps<AnchorHTMLAttributes<HTMLAnchorElement>>;
// , ref: RefObject<HTMLSpanElement>
export function useButton(props: ButtonOptions<'span'>): ButtonProps<HTMLAttributes<HTMLSpanElement>>;
// , ref: RefObject<HTMLDivElement>
export function useButton(props: ButtonOptions<'div'>): ButtonProps<HTMLAttributes<HTMLDivElement>>;

// , ref: RefObject<any>
export function useButton(props: ButtonOptions<ElementType>) {
    
    return {
        buttonProps: props
    }
}