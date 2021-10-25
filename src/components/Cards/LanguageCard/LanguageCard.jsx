import '../Cards.css'
import './LanguageCard.css'

const LanguageCard = ( {name, level, code} ) => {
    return (
        <div className="card language-card">
            <img src={`https://www.countryflagicons.com/FLAT/64/${code.toUpperCase()}.png`} alt={name}></img>
            <div>
                <h2>{name}</h2>
                <p>{level}</p>
            </div>
        </div>
    )
}

export default LanguageCard
