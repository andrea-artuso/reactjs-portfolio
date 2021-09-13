import { useState, useEffect } from 'react'

//Import STYLES
import './Projects.css'

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
            <header className="">
                <a href="/" >Return to homepage</a>

                <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search for projects"
                />
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
