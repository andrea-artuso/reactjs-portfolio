import { useState } from 'react';
import { useEffect } from 'react';
//Import ASSETS
import ProfilePicture from './assets/ProfilePicture.webp'

//Import STYLES
import './App.css';

//Import COMPONENTS
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';

//Import DATA
import { documentData } from './BasicData'

function App() {
  const [homeProjects, setHomeProjects] = useState([]);

  useEffect(() => {
    getProjectsData(setHomeProjects);
  }, [])
  return (
    <>
      <Header />
      {/* Landing section */}
      <section className="hero-section">
        <img src={ProfilePicture} alt="Andrea Artuso's profile avatar" className="profile-picture"></img>

        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm <span className="highlight-text">Andrea Artuso</span><br/> and I'm a frontend developer<br/> based in Italy.</h1>

          <p className="hero-description-title title-p">{documentData['homepage_description-title']}</p>
          <p>{documentData['homepage_description-text']}</p>

          <Button type="primary" text={documentData['homepage_CTA-button-text']} href={documentData['homepage_CTA-button-href']} />
        </div>
      </section>

      {/* Projects' section */}
      <section id="projects">
        {
          homeProjects.filter(project => project.isFeatured===true).map(featuredProject => <FeaturedProject key={featuredProject.id} title={featuredProject.title} role={featuredProject.role} year={featuredProject.year} description={featuredProject.description} image={featuredProject.image} link={featuredProject.link} github_link={featuredProject.github_link} />)
        }
        <div className="projects-container">
        </div>

        <Button type="primary" text="See all projects" href="/projects" />
      </section>
    </>
  );
}

function getProjectsData(setProjects){

  fetch('../data/Projects.json')
    .then(response => response.json())
    .then(data => setProjects(data))
}

export default App;