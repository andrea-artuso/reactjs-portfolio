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
import SchoolCard from './components/Cards/SchoolCard/SchoolCard';
import CertificationCard from './components/Cards/CertificationCard/CertificationCard';
import SkillCard from './components/Cards/SkillCard/SkillCard';


function App() {
  //Document useStates
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const [documentData, setDocumentData] = useState({});
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [schools, setSchools] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);

  //Document useEffects
  useEffect(() => {
    getDocumentData(setDocumentData);
    getProjectsData(setProjects);
    getSchoolsData(setSchools);
    getCertificationsData(setCertifications);
    getWorksData(setWorks);
    getSkillsData(setSkills);

    setTimeout(()=>setIsDocumentLoaded(true), 900);
  }, [])

  useEffect(() => {
    setFeaturedProjects(projects.filter(project => project.isFeatured===true))
  }, [projects])

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
          isDocumentLoaded ?          //Check if the document's elements are loaded
          (featuredProjects.length>0 ?     //Check if the featured-projects are at least 1
            featuredProjects.map(featuredProject =>    //TRUE: map featured projects
              //Render FeaturedProject component for every projects
              <FeaturedProject key={featuredProject.id} title={featuredProject.title} role={featuredProject.role} year={featuredProject.year} description={featuredProject.description} image={featuredProject.image} link={featuredProject.link} github_link={featuredProject.github_link} behance_link={featuredProject.behance_link} />
            ) : "No featured projects")     //FALSE: the document is loaded but there aren't featured projects => Render an error text
          : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
              <div className="loading-wheel spinning-wheel"></div>
              <div style={{marginTop: 10}}>Loading</div>
            </>
        }
        </div>

        <Button type="primary" text="See all projects" href="/projects" />
      </section>

      {/* Resume section */}
      <section id="resume">

        <div className="resume-main_container">
          <h1>Education</h1>
          <div className="resume-card_container">
            <p>School</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              (schools.length>0 ?     //Check if schools are at least 1
                schools.map(school =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SchoolCard key={school.id} name={school.name} place={school.place} place_link={school.place_link} start_year={school.start_year} final_year={school.end_year} grade={school.grade} max_grade={school.max_grade} />
                ) : "No schools found")     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>

          <div className="resume-card_container">
            <p>Certifications</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              (certifications.length>0 ?     //Check if the certifications are at least 1
                certifications.map(certification =>    //TRUE: map certifications
                  //Render CertificationCard component for every certification
                  <CertificationCard key={certification.id} name={certification.name} year={certification.year} orgDisplayName={certification['org_display-name']} orgFullName={certification['org_fullName']} orgWebsite={certification['org_website']} />
                ) : "No certifications found")     //FALSE: the document is loaded but there aren't certifications => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>
        </div>

        <div className="resume-main_container">
          <h1>Work experience</h1>
          <div className="resume-card_container">
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              (works.length>0 ?     //Check if schools are at least 1
                works.map(work =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <h1>{work.name}</h1>
                ) : "No work experience")     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="resume-main_container">
          <h1>Skills</h1>

          <div className="resume-card_container">   {/* FRONTEND DEVELOPMENT */}
            <p>Frontend development</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              skills.filter(skill => skill.type==="Frontend development").map(skill =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
                )     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>

          <div className="resume-card_container">   {/* SOFTWARE DEVELOPMENT */}
            <p>Software development</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              skills.filter(skill => skill.type==="Software development").map(skill =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
                )     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>

          <div className="resume-card_container">   {/* DEV TECHNOLOGIES */}
            <p>Dev technologies</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              skills.filter(skill => skill.type==="Dev technologies").map(skill =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
                )     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>

          <div className="resume-card_container">   {/* SOFTWARE */}
            <p>Software</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              skills.filter(skill => skill.type==="Software").map(skill =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
                )     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>

          <div className="resume-card_container">   {/* OPERATING SYSTEMS */}
            <p>Operating systems</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              skills.filter(skill => skill.type==="Operating systems").map(skill =>    //TRUE: map schools
                  //Render SchoolCard component for every school
                  <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
                )     //FALSE: the document is loaded but there aren't schools => Render an error text
              : <>   {/*FALSE: the document isn't loaded yet => Render a loading wheel with text below */}
                  <div>
                    <div className="loading-wheel spinning-wheel"></div>
                    <div style={{marginTop: 10}}>Loading</div>
                  </div>
                </>
            }
            </div>
          </div>
        </div>

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

function getSchoolsData(setSchools){
  fetch('../data/Schools.json')
    .then(response => response.json())
    .then(data => setSchools(data))
}

function getCertificationsData(setCertifications){
  fetch('../data/Certifications.json')
    .then(response => response.json())
    .then(data => setCertifications(data))
}

function getWorksData(setWorks){
  fetch('../data/Works.json')
    .then(response => response.json())
    .then(data => setWorks(data))
}

function getSkillsData(setSkills){
  fetch('../data/Skills.json')
    .then(response => response.json())
    .then(data => setSkills(data))
}

export default App;