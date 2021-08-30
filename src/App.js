//Import ASSETS
import ProfilePicture from './assets/ProfilePicture.webp'

//Import STYLES
import './App.css';

//Import COMPONENTS
import Header from './components/Header/Header';
import Button from './components/Button/Button';

//Import DATA
import { documentData } from './data/BasicData'

function App() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <img src={ProfilePicture} alt="Andrea Artuso's profile avatar" className="profile-picture"></img>

        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm <span className="highlight-text">Andrea Artuso</span><br/> and I'm a frontend developer<br/> based in Italy.</h1>

          <p className="hero-description-title title-p">{documentData['homepage_description-title']}</p>
          <p>{documentData['homepage_description-text']}</p>

          <Button type="primary" text={documentData['homepage_CTA-button-text']} href={documentData['homepage_CTA-button-href']} />
        </div>
      </section>
    </>
  );
}

export default App;
