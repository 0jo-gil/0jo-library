import { HTMLAttributes } from "enzyme"
import { ElementType, InputHTMLAttributes } from "react"

type InputProps<T extends ElementType = 'input'> = {
    variant?: 'primary' | 'secondary';
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <T extends ElementType = 'input'> ({variant, label, ...props}: InputProps<T>) => {
    return (
        <div>
            {label && <label htmlFor={props.name}>{label}</label> }
            <input {...props}/>
        </div>
    )
}

