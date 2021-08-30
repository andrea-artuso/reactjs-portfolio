//Import ASSETS
import Logotype from '../../assets/Logotype.webp'

//Import STYLES
import './Header.css'

//Import COMPONENTS
import '../Button/Button.jsx'
import Button from '../Button/Button.jsx'

const Header = () => {
    return (
        <header className="app-header homepage-header">
            <div className="loading-line"></div>
            <img src={Logotype} alt="Andrea Artuso's logo" onClick={()=>window.location.reload()} />

            <nav className="menu-container">
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <Button type="secondary" text="Get in touch" href="#contact" />
            </nav>
        </header>
    )
}

export default Header
