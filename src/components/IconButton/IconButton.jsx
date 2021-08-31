import './IconButton.css'

const IconButton = ( {iconPath, href, target} ) => {
    return (
        <a href={href} target={target} className="icon-button" >
            <img src={iconPath} alt=""></img>
        </a>
    )
}

export default IconButton
