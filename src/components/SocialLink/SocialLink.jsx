import './SocialLink.css'

const SocialLink = ( {iconPath, href, userName} ) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="link-button" >
            <img src={iconPath} alt=""></img>
            <span>{userName}</span>
        </a>
    )
}

export default SocialLink
