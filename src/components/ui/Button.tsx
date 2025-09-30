import './Button.css'

type ButtonProps = {
    text: string
    variant?: 'primary' | 'secondary' | 'danger' | 'outline'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, variant = 'primary', ...props }: ButtonProps) => {
    return (
        <button className={`button ${variant}`} {...props}>{text}</button>
    )
}