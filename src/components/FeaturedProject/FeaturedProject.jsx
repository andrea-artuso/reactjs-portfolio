import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton"

//Import ICONS
import github from '../../assets/Icons/github.webp'
import behance from '../../assets/Icons/behance.webp'

//Import CSS
import './FeaturedProject.css'

const FeaturedProject = ( {title, role, year, description, image, link, github_link, behance_link} ) => {
    return (
        <div className="project-container">
            <div className="project-image-wrapper">
                <img src={image} alt={title} className="project-image"></img>
                <div className="project-featured_sticker">Featured project</div>
            </div>
            <div className="project-info">
                <p className="project-role title-p">{`${year} - ${role}`}</p>
                <h1 className="project-title">{title}</h1>

                <p>{description}</p>

                <Button type="secondary" text="Visit website" href={link} target="_blank" />
                {github_link!=="" && 
                    <IconButton iconPath={github} href={github_link} target="_blank" /> 
                }
                {behance_link!=="" && 
                    <IconButton iconPath={behance} href={behance_link} target="_blank" />
                }
            </div>
        </div>
    )
}

export default FeaturedProject
