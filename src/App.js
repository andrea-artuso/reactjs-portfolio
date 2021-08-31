import { useState } from 'react';
import { useEffect } from 'react';
//Import ASSETS
import ProfilePicture from './assets/ProfilePicture.webp'
import PlaceholderImg from './assets/placeholder.png'

//Import STYLES
import './App.css';

//Import COMPONENTS
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';


function App() {
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const [documentData, setDocumentData] = useState({});
  const [homeProjects, setHomeProjects] = useState([]);

  useEffect(() => {
    getDocumentData(setDocumentData);
    getProjectsData(setHomeProjects);
    setTimeout(()=>setIsDocumentLoaded(true), 900);
  }, [])

  return (
    <>
      <Header />
      {/* Landing section */}
      <section className="hero-section">
        <img src={ProfilePicture} alt="Andrea Artuso's profile avatar" className={isDocumentLoaded ? "profile-picture" : ""}></img>

        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm <span className="highlight-text">Andrea Artuso</span><br/> and I'm a frontend developer<br/> based in Italy.</h1>

          <p className="hero-description-title title-p">{!isDocumentLoaded ? "Loading..." : documentData['homepage_description-title']}</p>

          <p>{!isDocumentLoaded ? "Loading content..." : documentData['homepage_description-text']}</p>

          <Button type="primary" text={!isDocumentLoaded ? "Loading..." : documentData['homepage_CTA-button-text']} href={documentData['homepage_CTA-button-href']} />
        </div>
      </section>

      {/* Projects' section */}
      <section id="projects">
        <div className="projects-container">
        { 
          isDocumentLoaded ? 
          homeProjects.filter(project => project.isFeatured===true).map(featuredProject => <FeaturedProject key={featuredProject.id} title={featuredProject.title} role={featuredProject.role} year={featuredProject.year} description={featuredProject.description} image={featuredProject.image} link={featuredProject.link} github_link={featuredProject.github_link} />)
          : <>
              <div className="loading-wheel spinning-wheel"></div>
              <div style={{marginTop: 10}}>Loading</div>
            </>
        }
        </div>

        <Button type="primary" text="See all projects" href="/projects" />
      </section>
    </>
  );
}

function getDocumentData(setData){
  fetch('../data/BasicData.json')
  .then(response => response.json())
  .then(data => setData(data))
}

function getProjectsData(setProjects){
  fetch('../data/Projects.json')
    .then(response => response.json())
    .then(data => setProjects(data))
}

export default App;