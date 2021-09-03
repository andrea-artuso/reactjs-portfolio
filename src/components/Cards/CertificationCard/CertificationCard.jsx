import '../Cards.css'
import './CertificationCard.css'

const CertificationCard = ( {name, year, orgDisplayName, orgFullName, orgWebsite} ) => {
    return (
        <div className="card little-card">
            <header>
                <h2>{name}</h2>
                <p className="title-p">{year}</p>
            </header>
            
            <a href={orgWebsite} target="_blank" title={orgFullName} rel="noreferrer">{orgDisplayName}</a>
        </div>
    )
}

export default CertificationCard
