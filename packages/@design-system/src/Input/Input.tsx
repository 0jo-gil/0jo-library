import { ElementType, InputHTMLAttributes } from "react"

type InputProps<T extends ElementType = 'input'> = {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <T extends ElementType = 'input'>({
    variant = 'primary',
    size,
    label,
    ...props
}: InputProps<T>) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input {...props} />
        </div>
    )
}