import './Button.scss'

interface ButtonProps {
    text: String
}
export const Button = ({text}: ButtonProps) => {
    return (
        <div className="button__container">
            {text}
        </div>
    )
}