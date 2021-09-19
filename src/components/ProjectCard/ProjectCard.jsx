import './ProjectCard.css'

import Button from '../Button/Button'
import IconButton from '../IconButton/IconButton'

import github from '../../assets/Icons/github.webp'
import behance from '../../assets/Icons/behance.webp'

const ProjectCard = ( {title, role, year, image, link, github_link, behance_link} ) => {
    return (
        <div className="project-card">
            <img src={image} alt="" />
            <div>
                <h1>{title}</h1>
                <p>{`${year} - ${role}`}</p>

                <div className="link-container">
                    {link!=="" &&
                        <Button type="primary" text="Visit website" href={link} target="_blank" />
                    }
                    {github_link!=="" && 
                        <IconButton iconPath={github} href={github_link} target="_blank" /> 
                    }
                    {behance_link!=="" && 
                        <IconButton iconPath={behance} href={behance_link} target="_blank" />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
