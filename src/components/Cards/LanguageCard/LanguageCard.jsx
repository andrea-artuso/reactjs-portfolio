import '../Cards.css'
import './LanguageCard.css'

const LanguageCard = ( {name, level, code} ) => {
    return (
        <div className="card language-card">
            <img src={`https://www.countryflags.io/${code.toLowerCase()}/flat/64.png`} alt={name}></img>
            <div>
                <h2>{name}</h2>
                <p>{level}</p>
            </div>
        </div>
    )
}

export default LanguageCard
