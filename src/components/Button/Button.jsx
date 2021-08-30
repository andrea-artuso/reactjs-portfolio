//Import STYLES
import './Button.css'

const Button = ( {type, text, href, target} ) => {
    return (
        <a 
            className={type==='primary' ? "button-primary" : "button-secondary"}
            href={href}
            target={target}
        >{text}</a>
    )
}

export default Button
