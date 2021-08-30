import { useState } from 'react'
//Import ASSETS
import Logotype from '../../assets/Logotype.webp'

//Import STYLES
import './Header.css'

//Import COMPONENTS
import '../Button/Button.jsx'
import Button from '../Button/Button.jsx'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);
    return (
        <header className="app-header homepage-header">
            <div className="loading-line"></div>
            <img src={Logotype} alt="Andrea Artuso's logo" onClick={()=>window.location.replace('/')} />

            <button className="menu-button" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`menu-container ${isMenuOpen ? "menu-open" : ''}`}>
                <a href="#projects" onClick={()=>{setIsMenuOpen(false)}}>Projects</a>
                <a href="#resume" onClick={()=>{setIsMenuOpen(false)}}>Resume</a>
                <Button type="secondary" text="Get in touch" href="#contact" onClick={()=>{setIsMenuOpen(false)}} />
            </nav>
        </header>
    )
}

export default Header
