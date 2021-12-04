import { useState } from 'react';
import { useEffect } from 'react';
//Import ASSETS
import ProfilePicture from '../../assets/ProfilePicture.webp'
import github from '../../assets/Icons/github.webp'
import behance from '../../assets/Icons/behance.webp'
import linkedin from '../../assets/Icons/linkedin.webp'

//Import STYLES
import './Homepage.css';

//Import COMPONENTS
import TextPlaceholder from '../../components/TextPlaceholder/TextPlaceholder';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import SchoolCard from '../../components/Cards/SchoolCard/SchoolCard';
import CertificationCard from '../../components/Cards/CertificationCard/CertificationCard';
import SkillContainer from '../../components/SkillContainer/SkillContainer';
import LanguageCard from '../../components/Cards/LanguageCard/LanguageCard';
import SocialLink from '../../components/SocialLink/SocialLink';
import Footer from '../../components/Footer/Footer';

function App() {
  //Document useStates
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const [documentData, setDocumentData] = useState({});
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [schools, setSchools] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  //Document useEffects
  useEffect(() => {
    getDocumentData(setDocumentData);
    getProjectsData(setProjects);
    getSchoolsData(setSchools);
    getCertificationsData(setCertifications);
    getLanguagesData(setLanguages);
    getWorksData(setWorks);
    getSkillsData(setSkills);

    setTimeout(()=>setIsDocumentLoaded(true), 900);
  }, [])

  useEffect(() => {
    setFeaturedProjects(projects.filter(project => project.isFeatured))
  }, [projects])

  return (
    <>
      <Header />
      {/* Landing section */}
      <section className="hero-section">
        <img src={ProfilePicture} alt="Andrea Artuso's profile avatar" className={isDocumentLoaded ? "profile-picture" : "image-width-placeholder"}></img>

        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm <span className="highlight-text">Andrea Artuso</span><br/> and I'm a frontend developer<br/> based in Italy.</h1>

          {!isDocumentLoaded ? <TextPlaceholder rows={1} width={180} height={20} margin={15} spaceAbove={90} widthOffset={0} /> : <p className="hero-description-title title-p">{documentData['homepage_description-title']}</p> }

          {!isDocumentLoaded ? <TextPlaceholder rows={5} width={760} height={20} margin={3} widthOffset={90} /> : <p>{documentData['homepage_description-text']}</p> }

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
          <div className="resume-card_container">   {/* SCHOOL EXPERIENCE */}
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

          <div className="resume-card_container">   {/* CERTIFICATIONS EXPERIENCE */}
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

          <div className="resume-card_container">   {/* CERTIFICATIONS EXPERIENCE */}
            <p>Languages</p>
            <div className="resume-wrap_container">
            { 
              isDocumentLoaded ?          //Check if the document's elements are loaded
              (languages.length>0 ?     //Check if the certifications are at least 1
                languages.map(language =>    //TRUE: map certifications
                  //Render CertificationCard component for every certification
                  <LanguageCard key={language.id} name={language.name} level={language.level} code={language.countryCode} />
                ) : "No languages found")     //FALSE: the document is loaded but there aren't certifications => Render an error text
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
          <div className="resume-card_container">   {/* WORK EXPERIENCE */}
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
          
          {
            skills.length>0 ?
            <>
              <SkillContainer category="Frontend development" skills={skills.filter(skill => skill.type==="Frontend development")} />
              <SkillContainer category="Backend development" skills={skills.filter(skill => skill.type==="Backend development")} />
              <SkillContainer category="Software development" skills={skills.filter(skill => skill.type==="Software development")} />
              <SkillContainer category="Dev technologies" skills={skills.filter(skill => skill.type==="Dev technologies")} />
              <SkillContainer category="Software" skills={skills.filter(skill => skill.type==="Software")} />
              <SkillContainer category="Operating systems" skills={skills.filter(skill => skill.type==="Operating systems")} />
            </>
            : <div className="resume-card_container">No skills found</div>
          }

        </div>

      </section>

      <br />
      <section id="contact">
        <div className="resume-main_container">
          <h1>Contact me</h1>
          <div className="el_center-container">

              <div className="contact-card">
                <p>Send me an E-mail</p>

                <div className="email-wrapper">
                  <div className="email-container" >andrea.artuso.business@gmail.com</div>

                  <Button type="primary" text={`${isEmailCopied ? "✔ Email copied!" : "Copy the email"}`} onClick={() => copyEmail(setIsEmailCopied)} />
                </div>

                <div className="social-card">
                  <p>Social networks</p>

                  <nav>
                    <SocialLink iconPath={github} href='https://github.com/andrea-artuso' userName='andrea-artuso' />
                    <SocialLink iconPath={behance} href='https://www.behance.net/andreaartuso' userName='Andrea Artuso' />
                    <SocialLink iconPath={linkedin} href='https://www.linkedin.com/in/andrea-artuso/' userName='andrea-artuso' />
                  </nav>
                </div>
              </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

function copyEmail(setIsEmailCopied, isEmailCopied){
  navigator.clipboard.writeText("andrea.artuso.business@gmail.com");
  setIsEmailCopied(!isEmailCopied);
  setTimeout(()=>{
    setIsEmailCopied(false);
  }, 1200)
}

function getDocumentData(setData){
    fetch('../../../data/BasicData.json')
      .then(response => response.json())
      .then(data => setData(data))
  }

function getProjectsData(setProjects){
  fetch('../../../data/Projects.json')
    .then(response => response.json())
    .then(data => setProjects(data))
}

function getSchoolsData(setSchools){
  fetch('../../../data/Schools.json')
    .then(response => response.json())
    .then(data => setSchools(data))
}

function getCertificationsData(setCertifications){
  fetch('../../../data/Certifications.json')
    .then(response => response.json())
    .then(data => setCertifications(data))
}

function getLanguagesData(setLanguages){
  fetch('../../../data/Languages.json')
    .then(response => response.json())
    .then(data => setLanguages(data))
}

function getWorksData(setWorks){
  fetch('../../../data/Works.json')
    .then(response => response.json())
    .then(data => setWorks(data))
}

function getSkillsData(setSkills){
  fetch('../../../data/Skills.json')
    .then(response => response.json())
    .then(data => setSkills(data))
}

export default App;