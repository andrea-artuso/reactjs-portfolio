import { useState, useEffect } from 'react'

//Import STYLES
import './Projects.css'

//Import ICONS
import { SearchIcon, XIcon  } from '@heroicons/react/outline'

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
                <a href="/" >Return to homepage</a>

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
            <div>
                {
                    filteredProjects.map(project => <h1 key={project.id} >{project.title}</h1>)
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
