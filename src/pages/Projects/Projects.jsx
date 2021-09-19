import { useState, useEffect } from 'react'

//Import STYLES
import './Projects.css'

//Import ICONS
import { SearchIcon, XIcon  } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

//Import COMPONENTS
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Header = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        getProjectsData(setProjects);
    }, [])

    useEffect(() => {
        setFilteredProjects(projects.filter(project => project.title.toLowerCase().includes(searchFilter)));
    }, [projects, searchFilter])

    return (
        <>
            <header className="app-header projects-header">
                <a href="/" >
                    <HomeIcon className="link-icon" />
                    <span>Return to homepage</span>
                </a>

                <div>
                    <input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Search for projects"
                    />

                    <button className={searchFilter!=="" ? "active-button" : ""} onClick={()=> setSearchFilter('')}>
                        {
                            searchFilter!=="" ?
                            <XIcon className="search-icon" /> :
                            <SearchIcon className="search-icon" />
                        }
                    </button>
                </div>
            </header>
            <div className="error-container">
                {
                    filteredProjects.length === 0 ?
                    <span>There aren't projects that match the filter.</span>
                    : ""
                }
            </div>
            <div className="project-page_container">
                {
                    filteredProjects.map(project => 
                        <ProjectCard key={project.id} title={project.title} role={project.role} year={project.year} image={project.image} link={project.link} github_link={project.github_link} behance_link={project.behance_link} />
                    )
                }
            </div>
        </>
    )
}

function getProjectsData(setProjects){
    fetch('../../../data/Projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
}  

export default Header
