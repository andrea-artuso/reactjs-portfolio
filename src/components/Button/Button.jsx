//Import STYLES
import './Button.css'

const Button = ( {type, text, href, target, onClick} ) => {
    return (
        <a 
            className={type==='primary' ? "button-primary" : "button-secondary"}
            href={href}
            target={target}
            onClick={onClick}
        >{text}</a>
    )
}

export default Button
